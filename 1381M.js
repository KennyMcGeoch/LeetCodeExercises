/**
 * @param {number} maxSize
 * Runtime: 94 ms, faster than 73.75% of JavaScript online submissions for Design a Stack With Increment Operation.
 * Memory Usage: 58.4 MB, less than 48.75% of JavaScript online submissions for Design a Stack With Increment Operation.
 */
var CustomStack = function(maxSize) {
    stack = []
    max = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (stack.length === max) return
    return stack.push(x)
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (stack.length) return stack.pop()
    return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    k = Math.min(k, stack.length)
    for (let i=0; i<k; i++) stack[i] += val
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */