/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 * Runtime: 74 ms, faster than 100.00% of JavaScript online submissions for Check If Array Pairs Are Divisible by k.
 * Memory Usage: 61 MB, less than 88.89% of JavaScript online submissions for Check If Array Pairs Are Divisible by k.
 */
var canArrange = function(arr, k) {
    
    let hash = new Array(k).fill(0)
    
    for (let i=0; i<arr.length; i++){
        if (arr[i] >= 0) hash[arr[i] % k]++
        else hash[(arr[i] % k)+k]++
    }

    let left = 1
    let right = k-1
    while (left < right){
        if (hash[left++] !== hash[right--]) return false
    }
    if (left === right && hash[left] % 2 == 1) return false
    
    return true
    
};