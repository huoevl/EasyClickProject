import { IOCRParam, OCRType } from "../pkg/_base/GameConst";
import { BaseClass } from "./BaseClass";
import { sleepTime1000, sleepTime2000 } from "./Const";
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
    /** 是否循环 */
    isLoop: boolean | undefined;
    /** ORC识别类对象 */
    ocrObj: OcrInst | undefined;

    init() {
        this.isLoop = true;
        if (!isServiceOk()) {
            startEnv();
        }
        if (!isServiceOk()) {
            Debug.loggerE("申请自动化权限失败");
            return;
        }
        this.initCapture();
        // this.initOcr();
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
        sleep(sleepTime2000);
    }
    /** 初始化OCR识别 */
    private initOcr() {
        this.ocrObj = ocr.newOcr();
        setStopCallback(() => {
            this.ocrObj?.releaseAll();
        })
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


}