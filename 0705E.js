// Runtime: 163 ms, faster than 56.41% of JavaScript online submissions for Design HashSet.
// Memory Usage: 54 MB, less than 17.95% of JavaScript online submissions for Design HashSet.
var MyHashSet = function() {
    hash = {}
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (hash[key] === undefined || hash[key] === false) hash[key] = true    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    hash[key] = false    
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if (hash[key] === true) return hash[key]
    else return false
    
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */