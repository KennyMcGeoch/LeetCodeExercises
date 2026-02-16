/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * Runtime 46ms Beats 64.11%
 * Memory 54.06MB Beats 73.24%
 */
var reverseBits = function(n) {
    let arr = new Array(32).fill("0")
    n = n.toString(2)
    for (let i=1; i<=n.length; i++){
        arr[i-1] = n[n.length-i]
    }
    return parseInt(arr.join(""),2)
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * Runtime 49ms Beats47.93%
 * Memory 55.04MB Beats 34.43%
 */
var reverseBits = function(n) {
    let arr = [  2147483648, 1073741824, 536870912,   268435456,  134217728,  67108864,
    33554432,   16777216,   8388608,     4194304,    2097152,   1048576,
      524288,     262144,    131072,       65536,      32768,     16384,
        8192,       4096,      2048,        1024,        512,       256,
         128,         64,        32,          16,          8,         4,
           2,          1]
    n = n.toString(2)
    let ans = 0
    for (let i=1; i<=n.length; i++){
        if (n[n.length-i] === "1") ans += arr[i-1]
    }
    return ans
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * Runtime 52ms Beats32.36%
 * Memory 53.58MB Beats 89.66%
 */
var reverseBits = function(n) {
    n = n.toString(2)
    let ans = 0
    for (let i=1; i<=n.length; i++){
        if (n[n.length-i] === "1") ans += 2 ** (32-i)
    }
    return ans
};

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 * Runtime 41ms Beats 85.52%
 * Memory 53.38MB Beats 93.31%
 */
var reverseBits = function(n) {
    let ans = 0
    for (let i=2; i<33; i++){
        if (n >= 2 ** (33-i)){
            n -= 2 ** (33-i)
            ans += 2 ** (i-2)
        }
    }
    return ans
};