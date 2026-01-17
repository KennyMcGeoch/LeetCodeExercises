/**
 * @param {number[][]} bottomLeft
 * @param {number[][]} topRight
 * @return {number}
 * Runtime 178ms Beats 90.91%
 * Memory 61.56MB Beats 63.64%
 */
var largestSquareArea = function(bottomLeft, topRight) {
    let ans = 0

    for (let i=0; i<bottomLeft.length; i++){
        for (let j=i+1; j<bottomLeft.length; j++){
            ans = Math.max(ans, Math.min(Math.min(topRight[i][0], topRight[j][0])-Math.max(bottomLeft[i][0],bottomLeft[j][0])
            ,Math.min(topRight[i][1], topRight[j][1])-Math.max(bottomLeft[i][1],bottomLeft[j][1])))
        }
    }

    return ans ** 2
};