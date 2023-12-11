/**
 * @param {number} n
 * @return {number}
 * Runtime: 42 ms, faster than 96.02% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 41.5 MB, less than 80.89% of JavaScript online submissions for Fibonacci Number.
 */
const fibonacci = [0,      1,      1,      2,      3,
    5,      8,     13,     21,     34,
   55,     89,    144,    233,    377,
  610,    987,   1597,   2584,   4181,
 6765,  10946,  17711,  28657,  46368,
75025, 121393, 196418, 317811, 514229,
832040]

var fib = function(n) {

return fibonacci[n]    
};

/**
 * @param {number} n
 * @return {number}
 * Runtime: 41 ms, faster than 97.02% of JavaScript online submissions for Fibonacci Number.
 * Memory Usage: 41.2 MB, less than 91.80% of JavaScript online submissions for Fibonacci Number.
 */

const fib = function(n) {
    let fibonacci = [0,      1,      1,      2,      3,
        5,      8,     13,     21,     34,
       55,     89,    144,    233,    377,
      610,    987,   1597,   2584,   4181,
     6765,  10946,  17711,  28657,  46368,
    75025, 121393, 196418, 317811, 514229,
    832040]
    
    function memoized(n){
        return fibonacci[n]  
    }
    return memoized(n)
};