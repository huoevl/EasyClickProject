import { MoudleName } from "../pkg/_base/PkgConst";

export const rectTemp = new Rect();
export const sleepTime100 = 100;
export const sleepTime200 = 200;
export const sleepTime300 = 300;
export const sleepTime400 = 400;
export const sleepTime500 = 500;
export const sleepTime1000 = 1000;
export const sleepTime2000 = 2000;
export const sleepTime3000 = 3000;

export const enum Environment {
    /** 开发 */
    dev = 0,
    /** 正式 */
    formal = 1,
}
/** 坐标范围类型 */
export type TRectPoint = [number, number, number, number]
/**
 * 起始坐标和终点
 */
export interface IPoint2 {
    x: number;
    y: number;
    x1: number;
    y1: number;
}

export interface IFindData {
    /** 寻找区域，可用来做点击区域,x,y,x1,y1 */
    rect: TRectPoint;
    /** 点击区域，如果没有点击区域则用寻图区域点击 */
    clickRect?: TRectPoint
}
export interface IFindImgData extends IFindData {
    moudleName: MoudleName,
    /** 文件名 */
    name: string;
    /** 是否二值化 */
    isBin?: boolean;
}
export interface IFindTxtData extends IFindData {
    txt: string;
}
export interface IFindColorData extends IFindData {
    color: string;
}


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

/** 安卓sdk对应的安卓版本 */
export const AndroidSdkToV: { [key: number]: number } = {
    [35]: 15,
    [34]: 14,
    [33]: 13,
    [32]: 12,
    [31]: 12,
    [30]: 11,
    [29]: 10,
    [28]: 9,
    [27]: 8.1,
    [26]: 8,
    [25]: 7.1,
    [24]: 7,
    [23]: 6,
    [22]: 5.1,
    [21]: 5,
}