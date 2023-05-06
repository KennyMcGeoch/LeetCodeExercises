/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 * Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Counter II.
 * Memory Usage: 45 MB, less than 100.00% of JavaScript online submissions for Counter II.
 */
var createCounter = function(init) {
    let temp = store = init
    function increment(){
        return ++temp
    }
    function decrement(){
        return --temp
    }
    function reset(){
        temp = store
        return store
    }
    return {increment, decrement, reset}
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */