import { BaseClass } from "./BaseClass";
import { Environment, IOCRParam, OCRType, sleepTime1000, sleepTime2000 } from "./Const";
import { Debug } from "./Debug";
declare global {
    interface IModuleMap {
        ecInit: EcInit
    }
}
export class EcInit extends BaseClass {
    /** 是否截图初始化 */
    isScreenInit: boolean | undefined;
    /** 是否图像识别初始化 */
    isOcrInit: boolean | undefined;
    /** openCV是否初始化 */
    isOpenCVInit: boolean | undefined;
    /** yolo训练模型是否初始化 */
    isYoloInit: boolean | undefined;


    /** 是否循环 */
    isLoop: boolean | undefined;
    /** ORC识别类对象 */
    ocrObj: OcrInst | undefined;
    /** yolo对象 */
    yoloObj: Yolov8Util | undefined

    init() {
        setExceptionCallback((err: string) => {
            this.onEcErr(err)
        })
        this.isLoop = true;
        if (!isServiceOk()) {
            startEnv();
        }
        if (!isServiceOk()) {
            Debug.loggerE("申请自动化权限失败");
            return;
        }
        this.initCapture();
        this.initOcr();
        this.initYolo();
    }

    /** 初始化截图 */
    private initCapture() {
        image.setInitParam(
            {
                "action_timeout": 10000,
                "auto_click_request_dialog": false
            }
        );
        image.setFindColorImageMode(2);
        let request = image.requestScreenCapture(sleepTime2000, 0);
        if (request) {
            this.isScreenInit = true;
            Debug.loggerD("申请截图成功");
        } else {
            Debug.loggerE("申请截图失败");
        }
        let d = image.initOpenCV();
        if (d) {
            this.isOpenCVInit = true;
        } else {
            Debug.loggerE("初始化OpenCV失败");
        }
        sleep(sleepTime1000);
    }
    onStop() {
        this.ocrObj?.releaseAll();
        this.yoloObj?.release();
        image.releaseScreenCapture();
        Debug.loggerW("停止运行回调")
    }
    /** 初始化OCR识别 */
    private initOcr() {
        this.ocrObj = ocr.newOcr();
        if (!isServiceOk()) {
            startEnv();
        }
        const data = {
            type: OCRType.OcrLite,
            padding: 20,
            maxSideLen: 0,
            numThread: 1
        } as IOCRParam;
        const result = this.isOcrInit = this.ocrObj.initOcr(data);
        if (!result) {
            Debug.loggerE("初始化图文识别失败：", this.ocrObj.getErrorMsg())
        }
        sleep(sleepTime1000);
    }
    private initYolo() {
        const binPath = "/sdcard/model.ncnn.bin";
        const paramPath = "/sdcard/model.ncnn.param";
        if (ccf.adpat.currEnv == Environment.dev || !file.exists(binPath)) {
            saveResToFile("model.ncnn.bin", "/sdcard/model.ncnn.bin")
        }
        if (ccf.adpat.currEnv == Environment.dev || !file.exists(paramPath)) {
            saveResToFile("model.ncnn.param", "/sdcard/model.ncnn.param")
        }
        sleep(sleepTime1000);
        // 初始化YOLO实例
        let yolov8s = this.yoloObj = yolov8Api.newYolov8();
        let config = yolov8s.getDefaultConfig("yolov8s-640", 640, 0.25, 0.35, "ALL", 1, [
            "wwdx",
        ])
        // 初始化 训练过的模型
        let inted = yolov8s.initYoloModel(config, paramPath, binPath);
        if (inted) {
            logd("初始化yolov8s成功");
            this.isYoloInit = true;
        } else {
            logd("初始化yolov8s失败: " + yolov8s.getErrorMsg());
        }
    }
    onEcErr(err: string) {
        Debug.loggerE("脚本异常停止：")
        Debug.loggerE(err)
    }

}