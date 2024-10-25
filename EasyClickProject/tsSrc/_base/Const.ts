export const rectTemp = new Rect();
export const sleepTime100 = 100;
export const sleepTime200 = 200;
export const sleepTime300 = 300;
export const sleepTime400 = 400;
export const sleepTime500 = 500;
export const sleepTime1000 = 1000;
export const sleepTime2000 = 2000;
export const sleepTime3000 = 3000;



export interface IFindImgData {
    /** 文件名 */
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
const numberMapping: { [key: number]: number } = {
    35: 15,
    34: 13
};
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