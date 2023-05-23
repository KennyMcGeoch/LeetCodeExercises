/**
 * @param {number} k
 * @param {number[]} nums
 * Runtime: 2482 ms, faster than 18.35% of JavaScript online submissions for Kth Largest Element in a Stream.
 * Memory Usage: 69.9 MB, less than 5.50% of JavaScript online submissions for Kth Largest Element in a Stream.
 */
var KthLargest = function(k, nums) {
    this.arr = nums.sort((a,b)=>b-a)
    this.max = k
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (val < this.arr[this.max-1]) return this.arr[this.max-1]
    this.arr.push(val)
    this.arr.sort((a,b)=>b-a).slice(0,this.max)
    return this.arr[this.max-1]
  
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */