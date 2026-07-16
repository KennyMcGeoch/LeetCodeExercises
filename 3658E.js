/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.76MB Beats 41.71%
 */
var gcdOfOddEvenSums = function(n) {
    return n
};

/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.10MB Beats 82.68%
 */
var gcdOfOddEvenSums = function(n) {
    let odd = 0
    let even = 0
    n *=2

    for (let i=1; i<=n; i+=2) odd += i
    for (let i=2; i<=n; i+=2) even += i

    function GCD(a,b){
        if (a % b === 0) return b
        return GCD(b, a%b)
    }

    return GCD(even,odd)
};

