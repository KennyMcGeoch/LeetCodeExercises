/*Runtime: 491 ms, faster than 83.47% of JavaScript online submissions for Insert Delete GetRandom O(1).
* Memory Usage: 92.7 MB, less than 96.87% of JavaScript online submissions for Insert Delete GetRandom O(1).
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