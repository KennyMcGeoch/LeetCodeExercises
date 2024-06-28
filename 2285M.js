/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 * Runtime: 146 ms, faster than 100.00% of JavaScript online submissions for Maximum Total Importance of Roads.
 * Memory Usage: 78.7 MB, less than 34.00% of JavaScript online submissions for Maximum Total Importance of Roads.
 */
var maximumImportance = function(n, roads) {
    
    let arr = new Array(n).fill(0)
    for (let i=0; i<roads.length; i++){
        arr[roads[i][0]]++
        arr[roads[i][1]]++
    }
    arr.sort((a,b)=>a-b)
    let ans = 0
    for (let i=0; i<arr.length; i++){
        ans += (arr[i]*(i+1))
    }
    return ans
};