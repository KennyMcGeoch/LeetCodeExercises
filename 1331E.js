/**
 * @param {number[]} arr
 * @return {number[]}
 * Runtime: 187 ms, faster than 45.02% of JavaScript online submissions for Rank Transform of an Array.
 * Memory Usage: 80.1 MB, less than 26.07% of JavaScript online submissions for Rank Transform of an Array.
 */
var arrayRankTransform = function(arr) {
    
    let rank = {}
    let rankArr = [...arr].sort((a,b) => a-b)
    let curr = 1
    for (let i=0; i<rankArr.length; i++){
        if (rank[rankArr[i]] === undefined) rank[rankArr[i]] = curr++
    }

    for (let i=0; i<arr.length; i++) arr[i] = rank[arr[i]]
    return arr
};