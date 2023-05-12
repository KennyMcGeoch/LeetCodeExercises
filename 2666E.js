/**
 * @param {Function} fn
 * @return {Function}
 * Runtime: 55 ms, faster than 78.47% of JavaScript online submissions for Allow One Function Call.
 * Memory Usage: 41.8 MB, less than 62.18% of JavaScript online submissions for Allow One Function Call.
 */
var once = function(fn) {
    let prevCalled = false
    return function(...args){
        if (prevCalled)return
        
        prevCalled = true
        return fn(...args);
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
