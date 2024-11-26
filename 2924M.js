/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * Runtime: 1 ms, faster than 100.00% of JavaScript online submissions for Find Champion II.
 * Memory Usage: 57.5 MB, less than 92.31% of JavaScript online submissions for Find Champion II.
 */
var findChampion = function(n, edges) {
    let arr = new Array(n).fill(true)
    
    for (let i=0; i<edges.length; i++) arr[edges[i][1]] = false
    
    let strong = false
    let ans = -1
    
    for (let i=0; i<n; i++){
        if (arr[i]){
            if (strong) return -1
            else {
                strong = true
                ans = i
            }
        }
    }
    
    return ans
};