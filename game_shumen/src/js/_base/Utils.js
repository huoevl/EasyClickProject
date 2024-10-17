/**
 * 根据寻图结果获取相似度最高的区域
 * @param {Array} points points：[{"top":135,"bottom":158,"left":853,"right":875,"similarity":1}]
 * @returns {Rect}
 */
function getPointsRectTemp(points) {
    if (!Array.isArray(points)) {
        return null;
    }
    let similarity = 0;
    let pointTemp = null;
    for (let index = 0; index < points.length; index++) {
        let point = points[index];
        if (point.similarity > similarity) {
            pointTemp = point;
        }
    }
    if (!pointTemp) {
        return null;
    }
    rectTemp.left = pointTemp.left;
    rectTemp.right = pointTemp.right;
    rectTemp.top = pointTemp.top;
    rectTemp.bottom = pointTemp.bottom;
    return rectTemp;
}