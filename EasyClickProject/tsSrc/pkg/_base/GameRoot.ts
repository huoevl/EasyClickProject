import { BaseClass } from "../../_base/BaseClass";
import { sleepTime1000, sleepTime2000, sleepTime500 } from "../../_base/Const";
import { Debug } from "../../_base/Debug";
import { IOCRParam, OCRType } from "./GameConst";
declare global {
    interface IModuleMap {
        /** 主入口类 */
        gameRoot: GameRoot
    }
}
export class GameRoot extends BaseClass {
    /** 是否可截图 */
    isCanJieTu: boolean | undefined;
    /** ORC识别类对象 */
    ocrObj: OcrInst | undefined;
    /** 是否初始化 */
    isInit: boolean | undefined;
    init() {
        this.initCapture();
        this.initOcr();
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
        let req = startEnv();
        if (!req) {
            Debug.loggerE("申请自动化权限失败");
            return;
        }
        let request = image.requestScreenCapture(sleepTime2000, 0);
        if (request) {
            this.isCanJieTu = true;
            Debug.loggerD(this.isCanJieTu);
            Debug.loggerD("申请截图成功");
        } else {
            Debug.loggerE("申请截图失败");
        }
        let d = image.initOpenCV();
        Debug.loggerD(d);
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
        const result = this.isInit = this.ocrObj.initOcr(data);
        if (!result) {
            Debug.loggerE("初始化图文识别失败：", this.ocrObj.getErrorMsg())
        }
        sleep(sleepTime1000);
    }
    /**
     * 获取文字识别文本
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    getOcrTxt(x: number, y: number, width: number, height: number) {
        if (!this.isInit) {
            return "";
        }
        let tempbitmap = image.captureScreenBitmap("png", x, y, x + width, y + height, 100);
        const tempbitmapEZ = image.binaryzationBitmap(tempbitmap, 1, 120);
        Debug.saveToDebug(tempbitmapEZ, "文字识别截图", true)
        let result = this.ocrObj?.ocrBitmap(tempbitmapEZ, 10000, {}) || [];
        let label = "";
        Debug.loggerD("文字识别结果：", JSON.stringify(result))
        for (var i = 0; i < result.length; i++) {
            var value = result[i];
            if (value.confidence! > 50) {
                label = value.label || "";
                break;
            }
        }
        image.recycle(tempbitmap);
        image.recycle(tempbitmapEZ);
        return label;
    }

    /**
    * 是否站立
    */
    isStand() {
        let txt1 = this.getOcrTxt(1148, 21, 83, 16).match(/[0-9]/g)?.join("");
        sleep(sleepTime500);
        let txt2 = this.getOcrTxt(1148, 21, 83, 16).match(/[0-9]/g)?.join("");
        Debug.loggerD("是否站立：", txt1, txt2)
        if (!txt1 || !txt2) {
            Debug.loggerE("文字识别出错")
            return false;
        }
        return txt1 === txt2;
    }
}