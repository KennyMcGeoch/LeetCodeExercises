/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 * Runtime: 168 ms, faster than 85.71% of JavaScript online submissions for Convert 1D Array Into 2D Array.
 * Memory Usage: 71.8 MB, less than 39.52% of JavaScript online submissions for Convert 1D Array Into 2D Array.
 */
var construct2DArray = function(original, m, n) {
    
    if (original.length !== m * n) return []
    else if (m === 1) return [original]
    
    let ans = []
    let curr = 0
    while (curr < original.length){
        let arr = []
        let target = curr + n
        while (curr < target) arr.push(original[curr++])
        ans.push(arr)
    }
    
    return ans
    
};

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 * Runtime: 169 ms, faster than 82.86% of JavaScript online submissions for Convert 1D Array Into 2D Array.
 * Memory Usage: 67.6 MB, less than 95.24% of JavaScript online submissions for Convert 1D Array Into 2D Array.
 */
var construct2DArray = function(original, m, n) {
    
    if (original.length !== m * n) return []
    else if (m === 1) return [original]
    
    let ans = []
    let curr = 0
    while (curr < original.length){
        ans.push(original.slice(curr, curr + n))
        curr += n
    }
    
    return ans
    
};