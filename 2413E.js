/**
 * @param {number} n
 * @return {number}
 * Runtime: 57 ms, faster than 63.82% of JavaScript online submissions for Smallest Even Multiple.
 * Memory Usage: 41.9 MB, less than 52.51% of JavaScript online submissions for Smallest Even Multiple.
 */
var smallestEvenMultiple = function(n) {
    if (n % 2 === 0)return n
    else return n * 2
};

/**
 * @param {number} n
 * @return {number}
 * Runtime: 45 ms, faster than 97.61% of JavaScript online submissions for Smallest Even Multiple.
 * Memory Usage: 41.5 MB, less than 88.44% of JavaScript online submissions for Smallest Even Multiple.
 */
var smallestEvenMultipleTwo = function(n) {
    return (n + (n * (n%2)))
};