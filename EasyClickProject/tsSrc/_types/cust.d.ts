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