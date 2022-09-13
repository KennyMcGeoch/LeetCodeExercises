/**
 * @param {number} n
 * @return {number}
Runtime: 84 ms, faster than 73.68% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 42.1 MB, less than 32.69% of JavaScript online submissions for Fibonacci Number.
 */


var fib = function(n) {

    const fibonacci = [0,      1,      1,      2,      3,
        5,      8,     13,     21,     34,
       55,     89,    144,    233,    377,
      610,    987,   1597,   2584,   4181,
     6765,  10946,  17711,  28657,  46368,
    75025, 121393, 196418, 317811, 514229,
    832040]

    return fibonacci[n]    
};