// Runtime: 59 ms, faster than 42.50% of JavaScript online submissions for Array Prototype Last.
// Memory Usage: 41.8 MB, less than 70.90% of JavaScript online submissions for Array Prototype Last.

Array.prototype.last = function() {
    let len = this.length
    if (len-- === 0)return -1
    else return this[len]
    
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */