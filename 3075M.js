/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 * Runtime: 244 ms, faster than 55.48% of JavaScript online submissions for Maximize Happiness of Selected Children.
 * Memory Usage: 68 MB, less than 45.89% of JavaScript online submissions for Maximize Happiness of Selected Children.
 */
var maximumHappinessSum = function(happiness, k) {
    
    happiness.sort((a,b)=>b-a)
    let total = 0
    
    for (let i=0; i<k; i++){
        let temp = happiness[i] - i
        if (temp < 0) return total
        total += temp
    }
    
    return total
    
};

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 * Runtime: 225 ms, faster than 94.98% of JavaScript online submissions for Maximize Happiness of Selected Children.
 * Memory Usage: 66.9 MB, less than 93.61% of JavaScript online submissions for Maximize Happiness of Selected Children.
 */
var maximumHappinessSum = function(happiness, k) {
    
    happiness.sort((a,b)=>b-a)
    let total = 0
    
    for (let i=0; i<k; i++){
        total += Math.max(happiness[i] - i, 0)
    }
    
    return total
    
};