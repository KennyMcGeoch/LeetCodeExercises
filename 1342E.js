/**
 * @param {number} num
 * @return {number}
 * Runtime: 105 ms, faster than 22.95% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
Memory Usage: 41.7 MB, less than 80.67% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
 */
 var numberOfSteps = function(num) {
    steps = 0

    while (num > 0){
        if (num % 2 === 0){
            num /= 2
            steps++
        }
        else{
            num -= 1
            steps++
        }
    }

    return steps
    
};

numberOfSteps(14)