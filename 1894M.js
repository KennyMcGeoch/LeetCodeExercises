/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 * Runtime: 548 ms, faster than 24.10% of JavaScript online submissions for Find the Student that Will Replace the Chalk.
 * Memory Usage: 59.2 MB, less than 93.98% of JavaScript online submissions for Find the Student that Will Replace the Chalk.
 */
var chalkReplacer = function(chalk, k) {
    
    let total = 0
    
    for (let i=0; i<chalk.length; i++){
        k -= chalk[i]
        if (k < 0) return i
        else total += chalk[i]
    }
    
    while (k >= total) k-= total
    
    for (let i=0; i<chalk.length; i++){
        k-= chalk[i]
        if (k < 0) return i
    }
    
    
    
};

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 * Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Find the Student that Will Replace the Chalk.
 * Memory Usage: 59.7 MB, less than 79.52% of JavaScript online submissions for Find the Student that Will Replace the Chalk.
 */
var chalkReplacer = function(chalk, k) {
    
    let total = 0
    
    for (let i=0; i<chalk.length; i++){
        k -= chalk[i]
        if (k < 0) return i
        else total += chalk[i]
    }
    
    k%= total
    
    for (let i=0; i<chalk.length; i++){
        k-= chalk[i]
        if (k < 0) return i
    }
    
};