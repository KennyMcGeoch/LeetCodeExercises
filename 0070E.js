/**
 * @param {number} n
 * @return {number}
 * Runtime: 76 ms, faster than 69.67% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 41.8 MB, less than 56.47% of JavaScript online submissions for Climbing Stairs.
 */
 var climbStairs = function(n) {

    const fibonacci = [0,     1,      2,      3,
        5,      8,     13,     21,     34,
       55,     89,    144,    233,    377,
      610,    987,   1597,   2584,   4181,
     6765,  10946,  17711,  28657,  46368,
    75025, 121393, 196418, 317811, 514229,
    832040, 1346269, 2178309 ,3524578 ,5702887, 9227465,
    14930352, 24157817, 39088169, 63245986, 102334155, 165580141,
    267914296, 433494437, 701408733, 1134903170, 1836311903]

    return fibonacci[n]
    
};

climbStairs(10)
