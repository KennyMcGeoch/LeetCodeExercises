/*
* Runtime: 73 ms, faster than 82.62% of JavaScript online submissions for Implement Stack using Queues.
* Memory Usage: 42 MB, less than 36.55% of JavaScript online submissions for Implement Stack using Queues.
*/

var MyStack = function() {
    stack = []    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    stack.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    num = stack.pop()  
    return num
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return stack[stack.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return stack.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */