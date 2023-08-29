/**
 * @param {string[]} details
 * @return {number}
 * Runtime: 49 ms, faster than 96.33% of JavaScript online submissions for Number of Senior Citizens.
 * Memory Usage: 42.7 MB, less than 96.54% of JavaScript online submissions for Number of Senior Citizens.
 */
var countSeniors = function(details) {
    
    let oaps = 0
    
    for (let i=0; i<details.length; i++){
        if (details[i].slice(11,13) > 60) oaps++
    }
    
    return oaps
    
};