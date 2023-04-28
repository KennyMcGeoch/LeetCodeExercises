/**
 * @param {number} n
 * @return {Function} counter
 * Runtime: 61 ms, faster than 33.98% of JavaScript online submissions for Counter.
 * Memory Usage: 42.2 MB, less than 25.62% of JavaScript online submissions for Counter.
 */
var createCounter = function(n) {
    const counter = n
    return function() {
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */