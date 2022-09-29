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