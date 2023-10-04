
var MyHashMap = function() {
    this.hash = {}    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.hash[key] = value    
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if (this.hash[key] === undefined)return -1
    return this.hash[key]
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.hash[key]
    
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 * Runtime: 141 ms, faster than 92.27% of JavaScript online submissions for Design HashMap.
 * Memory Usage: 52.5 MB, less than 41.85% of JavaScript online submissions for Design HashMap.
 */