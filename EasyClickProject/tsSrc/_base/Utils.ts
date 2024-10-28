import { rectTemp } from "./Const";

export class Utils {
    /**
     * 根据寻图结果获取相似度最高的区域
     * @param {Array} rects points：[{"top":135,"bottom":158,"left":853,"right":875,"similarity":1}]
     * @returns {Rect}
     */
    static getRectByArray(rects: any[]): Rect | undefined {
        if (!Array.isArray(rects)) {
            return;
        }
        let similarity = 0;
        let pointTemp = null;
        for (let index = 0; index < rects.length; index++) {
            let point = rects[index];
            if (point.similarity > similarity) {
                pointTemp = point;
            }
        }
        if (!pointTemp) {
            return;
        }
        rectTemp.left = pointTemp.left;
        rectTemp.right = pointTemp.right;
        rectTemp.top = pointTemp.top;
        rectTemp.bottom = pointTemp.bottom;
        return rectTemp;
    }
}
