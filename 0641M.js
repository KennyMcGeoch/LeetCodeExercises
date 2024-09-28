/**
 * @param {number} k
 * Runtime: 86 ms, faster than 100.00% of JavaScript online submissions for Design Circular Deque.
 * Memory Usage: 57.6 MB, less than 89.06% of JavaScript online submissions for Design Circular Deque.
 */
var MyCircularDeque = function(k) {
    this.len = 0
    this.max = k
    this.arr = []
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.len === this.max) return false
    else{
        this.len++
        this.arr.unshift(value)
    }
    return true
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.len === this.max) return false
    else{
        this.len++
        this.arr.push(value)
    }
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.len === 0) return false
    else{
        this.len--
        this.arr.shift()
    }
    return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.len === 0) return false
    else{
        this.len--
        this.arr.pop()
    }
    return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.len === 0) return -1
    else return this.arr[0]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.len === 0) return -1
    else return this.arr[this.arr.length-1]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.arr.length === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.arr.length === this.max
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */