/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 * Runtime: 50 ms, faster than 98.45% of JavaScript online submissions for Kth Distinct String in an Array.
 * Memory Usage: 51.8 MB, less than 68.56% of JavaScript online submissions for Kth Distinct String in an Array.
 */
var kthDistinct = function(arr, k) {
    
    let hash = {}
    
    for (let i=0; i<arr.length; i++) hash[arr[i]] = (hash[arr[i]] || 0) + 1
    
    
    for (let i=0; i<arr.length; i++){
        if (hash[arr[i]] === 1){
            if (--k === 0) return arr[i]
        }
    }
    
    return ""
    
};

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 * Runtime: 55 ms, faster than 91.75% of JavaScript online submissions for Kth Distinct String in an Array.
 * Memory Usage: 51.8 MB, less than 68.56% of JavaScript online submissions for Kth Distinct String in an Array.
 */
var kthDistinct = function(arr, k) {
    
    let hash = {}
    let uniq = []
    
    for (let i=0; i<arr.length; i++){
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
        if (hash[arr[i]] === 1) uniq.push(arr[i])
    }
    
    
    for (let i=0; i<uniq.length; i++){
        if (hash[uniq[i]] === 1){
            if (--k === 0) return uniq[i]
        }
    }
    
    return ""
    
};

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 * Runtime: 61 ms, faster than 78.87% of JavaScript online submissions for Kth Distinct String in an Array.
 * Memory Usage: 53.5 MB, less than 33.51% of JavaScript online submissions for Kth Distinct String in an Array.
 */
var kthDistinct = function(arr, k) {
    
    let hash = {}
    let uniq = []
    
    for (let i=0; i<arr.length; i++){
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
        if (hash[arr[i]] === 1) uniq.push(arr[i])
    }
    
    return uniq.filter((a)=> hash[a] === 1).filter((a,b)=> b === k-1).join("") || ""
}