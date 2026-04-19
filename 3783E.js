/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.53MB Beats 44.41%
 */
var mirrorDistance = function(n) {
    let num = 0
    let orig = n
    while(n){
        num += n % 10
        n = Math.floor(n/10)
        if (n) num *=10
    }
    return Math.abs(num - orig)
};