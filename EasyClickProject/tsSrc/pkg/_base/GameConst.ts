/** ocr类型：目前的OCR包含了mlkit,ocrLite,百度AI的easyedge,paddleocr,Tesseract,paddleOcrOnline和百度在线识别
 *  此处只列举两个
 */
export const enum OCRType {
    Mlkit = "mlkit",
    OcrLite = "ocrLite"
}
/**
 * ocr初始化参数：
 * tess：{"type":"tess","language":"chi_sim","debug":false,"ocrEngineMode":3}
 * baiduOnline：{"type":"baiduOnline","ak":"xxx","sk":"xx"}
 * ocrLite:{"type":"ocrLite","numThread":4,"padding":10,"maxSideLen":0}
 */
export interface IOCRParam {
    type?: OCRType,
    /** 线程数量 */
    numThread?: number,
    /** 图像预处理，在图片外周添加白边，用于提升识别率，文字框没有正确框住所有文字时，增加此值 */
    padding?: number,
    /** 按图片最长边的长度：Math.min(maxSideLen,图片长度)，此值为0代表不缩放，例：1024 */
    maxSideLen?: number
}