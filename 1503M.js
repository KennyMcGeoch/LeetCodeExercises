/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 * Runtime: 53 ms, faster than 100.00% of JavaScript online submissions for Last Moment Before All Ants Fall Out of a Plank.
 * Memory Usage: 43.8 MB, less than 100.00% of JavaScript online submissions for Last Moment Before All Ants Fall Out of a Plank.
 */
var getLastMoment = function(n, left, right) {
    let min = Math.max(...left)
    let max = Math.min(...right)
    

    return Math.max(min, n-max)
    
};

/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 * Runtime: 45 ms, faster than 100.00% of JavaScript online submissions for Last Moment Before All Ants Fall Out of a Plank.
 * Memory Usage: 43.9 MB, less than 100.00% of JavaScript online submissions for Last Moment Before All Ants Fall Out of a Plank.
 */
var getLastMoment = function(n, left, right) {
    return Math.max(Math.max(...left), n-Math.min(...right))
    
};