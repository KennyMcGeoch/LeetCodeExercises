/**
 * @param {number} n
 * @return {number}
 * Runtime: 106 ms, faster than 42.96% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 42.2 MB, less than 13.49% of JavaScript online submissions for Fibonacci Number.
 */
 var fib = function(n) {
    let total = 0
    let sumTotal = [0,1]
    if (n < 2){
        return n
    }
    for (i=1; i<n; i++){
        total = sumTotal[i]+sumTotal[i-1]
        sumTotal.push(total)

    }
    return total
    
};

fib(30)
