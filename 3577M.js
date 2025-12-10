/**
 * @param {number[]} complexity
 * @return {number}
 * Runtime 7ms Beats -%
 * Memory 64.11MB Beats 80.00%
 */
var countPermutations = function(complexity) {
    let ans = 1
    let min = complexity[0]
    for (let i=1; i<complexity.length; i++){
        if (complexity[i] <= min) return 0
        ans *= i
        ans %= 1000000007
    }
    return ans
};

/**
 * @param {number[]} complexity
 * @return {number}
 * Runtime 5ms Beats 80.00%
 * Memory 63.09MB Beats 80.00%
 */
var countPermutations = function(complexity) {
    let min = complexity[0]
    for (let i=1; i<complexity.length; i++){
        if (complexity[i] <= min) return 0
    }
    let ans = 1
    for (let i=1; i<complexity.length; i++){
        ans *= i
        ans %= 1000000007
    }
    return ans
};