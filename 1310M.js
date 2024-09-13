/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 * Runtime: 1876 ms, faster than 5.13% of JavaScript online submissions for XOR Queries of a Subarray.
 * Memory Usage: 63.2 MB, less than 76.92% of JavaScript online submissions for XOR Queries of a Subarray.
 */
var xorQueries = function(arr, queries) {
    
    let ans = []
    
    for (let i=0; i<queries.length; i++){
        let temp = arr[queries[i][0]]
        for (let j=queries[i][0]+1; j<= queries[i][1]; j++){
            temp ^= arr[j]
        }
        ans.push(temp)
    }
    
    return ans
    
};

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 * Runtime: 86 ms, faster than 79.49% of JavaScript online submissions for XOR Queries of a Subarray.
 * Memory Usage: 63.4 MB, less than 64.10% of JavaScript online submissions for XOR Queries of a Subarray.
 */
var xorQueries = function(arr, queries) {
    
    let ans = []
    for (let i=1; i<arr.length; i++)arr[i] ^= arr[i-1]
    
    for (let i=0; i<queries.length; i++) ans.push(arr[queries[i][0]-1] ^ arr[queries[i][1]])
    
    return ans
    
};