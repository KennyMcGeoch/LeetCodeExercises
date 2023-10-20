/**
 * Runtime: 70 ms, faster than 91.25% of JavaScript online submissions for Flatten Nested List Iterator.
 * Memory Usage: 54.5 MB, less than 18.75% of JavaScript online submissions for Flatten Nested List Iterator.
 
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    let arrList = []
    this.num = 0
    this.res = arrList
    
    nest(nestedList)
    
    function nest(arr){
        for (let i=0; i<arr.length; i++){
            if (arr[i] === undefined)return
            if (arr[i].isInteger()) arrList.push(arr[i].getInteger())
            else nest(arr[i].getList())
        }
    }
    
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.num < this.res.length
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.res[this.num++]
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/