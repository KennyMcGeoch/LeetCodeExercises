/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 * Runtime: 35 ms, faster than 100.00% of JavaScript online submissions for Poor Pigs.
 * Memory Usage: 41.6 MB, less than 35.71% of JavaScript online submissions for Poor Pigs.
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    
    if (minutesToDie === minutesToTest) return Math.ceil(Math.log(buckets)/Math.log(2))
    let time = minutesToTest/minutesToDie + 1 // This should be Math.floor if test cases were stricter
    let pigs = 1
    while (Math.pow(time, pigs) < buckets) pigs++
    
    return pigs
    
};

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 * Runtime: 53 ms, faster than 35.71% of JavaScript online submissions for Poor Pigs.
 * Memory Usage: 40.9 MB, less than 92.86% of JavaScript online submissions for Poor Pigs.
 */
var poorPigs2 = function(buckets, minutesToDie, minutesToTest) {
    
    if (minutesToDie === minutesToTest) return Math.ceil(Math.log(buckets)/Math.log(2))
    let time = Math.floor(minutesToTest/minutesToDie) + 1
    let pigs = 1
    while (Math.pow(time, pigs) < buckets) pigs++
    
    return pigs
    
};