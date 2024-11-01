declare interface IOcrBitMap {
    /** 识别的文字 */
    label?: string,
    /** 代表识别的准确度 */
    confidence?: number,
    x?: number,
    y?: number,
    width?: number,
    height?: number
}

/** yolov8识别结果 */
declare interface IYoloV8Result {
    name: string;
    /** 相似度：0-1 */
    confidence: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
}