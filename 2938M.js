/**
 * @param {string} s
 * @return {number}
 * Runtime: 67 ms, faster than 89.09% of JavaScript online submissions for Separate Black and White Balls.
 * Memory Usage: 52.3 MB, less than 96.36% of JavaScript online submissions for Separate Black and White Balls.
 */
var minimumSteps = function(s) {
    let sum = 0
    let ind = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "0"){
            sum ++
            ind += i
        }
    }

    for (let i=0; i<sum; i++) ind -= i
    return ind
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 69 ms, faster than 83.64% of JavaScript online submissions for Separate Black and White Balls.
 * Memory Usage: 53.1 MB, less than 65.45% of JavaScript online submissions for Separate Black and White Balls.
 */
var minimumSteps = function(s) {
    let ind = 0
    let count = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "0"){
            ind += i
            ind -= count++
        }
    }

    return ind
};