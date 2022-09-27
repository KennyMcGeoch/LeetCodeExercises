/**
 * @param {number[]} candyType
 * @return {number}
 * Runtime: 201 ms, faster than 48.74% of JavaScript online submissions for Distribute Candies.
Memory Usage: 56.3 MB, less than 47.77% of JavaScript online submissions for Distribute Candies.
 */
 var distributeCandies = function(candyType) {

    let typeCandy = new Set(candyType).size
    let amount = parseInt(candyType.length/2)
    return Math.min(typeCandy, amount)
    
};

distributeCandies([1,1,2,3])