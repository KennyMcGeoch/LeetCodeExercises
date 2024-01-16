/*Runtime: 491 ms, faster than 83.47% of JavaScript online submissions for Insert Delete GetRandom O(1).
* Memory Usage: 92.7 MB, less than 96.87% of JavaScript online submissions for Insert Delete GetRandom O(1).
First Version
*/

var RandomizedSet = function() {    
    mySet = new Set()    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (mySet.has(val))return false
    else mySet.add(val)
    return true    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (mySet.has(val)){
        mySet.delete(val)
        return true
    }
    return false    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let items = Array.from(mySet);
    return items[Math.floor(Math.random() * items.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/*Runtime: 569 ms, faster than 20.01% of JavaScript online submissions for Insert Delete GetRandom O(1).
  Memory Usage: 120.9 MB, less than 6.14% of JavaScript online submissions for Insert Delete GetRandom O(1).
  Second Version
*/
var RandomizedSet = function() {    
    this.hash = {}   
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.hash[val] !== undefined)return false
    else this.hash[val] = true
    return true    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.hash[val] !== undefined){
        delete this.hash[val]
        return true
    }
    return false    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let items = Object.keys(this.hash)
    return items[Math.floor(Math.random() * items.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 * 
 * /*
 
 /*Runtime: 319 ms, faster than 75.18% of JavaScript online submissions for Insert Delete GetRandom O(1).
   Memory Usage: 109.1 MB, less than 81.79% of JavaScript online submissions for Insert Delete GetRandom O(1).
   Third version
 */

var RandomizedSet = function() {    
    mySet = new Set()    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (mySet.has(val))return false
    else mySet.add(val)
    return true    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (mySet.has(val)){
        mySet.delete(val)
        return true
    }
    return false    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let val = Math.floor(Math.random() * mySet.size)
    let count = 0
    for (x of mySet.keys()) if (count++ === val) return x
};


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */