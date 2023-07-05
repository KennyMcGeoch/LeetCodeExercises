/**
 * @param {number[]} heights
 * @return {number}
 * Runtime: 52 ms, faster than 93.19% of JavaScript online submissions for Height Checker.
 * Memory Usage: 42.6 MB, less than 18.70% of JavaScript online submissions for Height Checker.
 */
var heightChecker = function(heights) {
    
    let exp = [...heights].sort((a,b)=>a-b)
    let err = 0
    for (i=0; i<heights.length; i++){
        if (heights[i] !== exp[i])err++
    }
    return err
    
};