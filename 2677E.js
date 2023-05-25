/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 * Runtime: 64 ms, faster than 58.61% of JavaScript online submissions for Chunk Array.
 * Memory Usage: 44.9 MB, less than 28.33% of JavaScript online submissions for Chunk Array.
 */
var chunk = function(arr, size) {
    
    let ans = []
    
    let row = 0
    let loops = arr.length
    let i=0
    
    while (i<loops){
        ans.push([])
        for (let j=0; j<size; j++, i++){
            if (arr[i] !== undefined) ans[row].push(arr[i])
            
        }
        row++
    }
    
    return ans
    
};
