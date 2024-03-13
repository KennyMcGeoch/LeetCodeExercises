/**
 * @param {number} n
 * @return {number}
 * Runtime: 54 ms, faster than 71.80% of JavaScript online submissions for Find the Pivot Integer.
 * Memory Usage: 48.9 MB, less than 65.13% of JavaScript online submissions for Find the Pivot Integer.
 */
var pivotInteger = function(n) {
    if (n === 1) return n
    let right = (n+1) * n / 2
    let left = 0
    
    for (let i=1; i<n; i++){
        left += i
        if (left === right) return i
        else if (left > right) return -1
        right -= i
    }
    
    return -1
    
};

/**
 * @param {number} n
 * @return {number}
 * Runtime: 45 ms, faster than 95.38% of JavaScript online submissions for Find the Pivot Integer.
 * Memory Usage: 48.7 MB, less than 74.36% of JavaScript online submissions for Find the Pivot Integer.
 */
var pivotInteger = function(n) {
    let pivotSquared = (n**2 + n)/2
    let pivot = pivotSquared ** 0.5
    if (pivot % 1 === 0) return pivot
    
    return -1
    
};