/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 * Runtime: 194 ms, faster than 74.32% of JavaScript online submissions for Rectangle Area.
 * Memory Usage: 47.5 MB, less than 29.73% of JavaScript online submissions for Rectangle Area.
 */
 var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

    function rect(a,b,c,d){
        return (b-a) * (d-c)
    }

    let rectOne = rect(ax2, ax1, ay2, ay1)
    let rectTwo = rect(bx2, bx1, by2, by1)
    let total = rectOne + rectTwo

    function overlap(){
        let overlapX = Math.max((ax2 + bx2 - ax1 - bx1) - Math.abs(Math.max(ax2, bx2) - Math.min(ax1,bx1)),0)
        let overlapY = Math.max((ay2 + by2 - ay1 - by1) -Math.abs(Math.max(ay2, by2) - Math.min(ay1,by1)),0)
        return overlapX * overlapY
    }

    return total - overlap()    
};