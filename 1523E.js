/**
 * @param {number} low
 * @param {number} high
 * Runtime: 90 ms, faster than 76.33% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
 * Memory Usage: 42.5 MB, less than 5.70% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
 * @return {number}
 */
 var countOdds = function(low, high) {

    let count = parseInt((high-low)/2)

    if (high % 2 === 1 || low % 2 === 1){
        return count+1
    }

    return count  
};

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 * Runtime 36ms Beats 95.73%
 * Memory 53.08MB Beats 95.73%
 */
 var countOdds = function(low, high) {

    return Math.ceil(high/2) - Math.floor(low/2) 
};