/**
 * @param {number[][]} dimensions
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.76MB Beats 97.78%
 */
var areaOfMaxDiagonal = function(dimensions) {
    let max = 0
    let ans = 0

    for (let i=0; i<dimensions.length; i++){
        if ((dimensions[i][0] ** 2) + (dimensions[i][1] ** 2) > max){
            max = (dimensions[i][0] ** 2) + (dimensions[i][1] ** 2)
            ans = dimensions[i][0] * dimensions[i][1]
        }
        else if ((dimensions[i][0] ** 2) + (dimensions[i][1] ** 2) === max) ans = Math.max(ans, dimensions[i][0] * dimensions[i][1])
    }

    return ans
};

/**
 * @param {number[][]} dimensions
 * @return {number}
 * Runtime 1ms Beats 88.89%
 * Memory 54.83MB Beats 95.56%
 */
var areaOfMaxDiagonal = function(dimensions) {
    let max = 0
    let ans = 0

    for (let i=0; i<dimensions.length; i++){
        if ((dimensions[i][0] ** 2) + (dimensions[i][1] ** 2) >= max){
            if ((dimensions[i][0] ** 2) + (dimensions[i][1] ** 2) === max) ans = Math.max(ans, dimensions[i][0] * dimensions[i][1])
            else {
                max = (dimensions[i][0] ** 2) + (dimensions[i][1] ** 2)
                ans = dimensions[i][0] * dimensions[i][1]
            }
        }
    }

    return ans
};