/**
 * @param {number} n
 * @return {Function} counter
 * Runtime: 55 ms, faster than 69.57% of JavaScript online submissions for Counter.
 * Memory Usage: 42 MB, less than 56.40% of JavaScript online submissions for Counter.
 */
var createCounter = function(n) {
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