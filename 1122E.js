/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * Runtime: 51 ms, faster than 77.73% of JavaScript online submissions for Relative Sort Array.
 * Memory Usage: 49.6 MB, less than 51.36% of JavaScript online submissions for Relative Sort Array.
 */
var relativeSortArray = function(arr1, arr2) {
    
    let hash = {}
    
    for (let i=0; i<arr1.length; i++) hash[arr1[i]] = (hash[arr1[i]] || 0) + 1
    let ans = []
    
    for (let i=0; i< arr2.length; i++){
        while (hash[arr2[i]]-- > 0) ans.push(arr2[i])
    }
    for (x in hash){
        while (hash[x]-- > 0) ans.push(x)
    }
    
    return ans
    
};