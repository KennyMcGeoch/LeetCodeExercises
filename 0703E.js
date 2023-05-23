/**
 * @param {number} k
 * @param {number[]} nums
 * Runtime: 1547 ms, faster than 22.93% of JavaScript online submissions for Kth Largest Element in a Stream.
 * Memory Usage: 59.3 MB, less than 15.14% of JavaScript online submissions for Kth Largest Element in a Stream.
 */
var KthLargest = function(k, nums) {
    this.arr = nums.sort((a,b)=>b-a)
    this.max = k
    while (this.arr.length > k){
        this.arr.pop()
    }
    while (this.arr.length < k){
        this.arr.push(-100000)
    }
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (val < this.arr[this.max-1]) return this.arr[this.max-1]
    this.arr.push(val)
    this.arr.sort((a,b)=>b-a).pop()
    return this.arr[this.max-1]
  
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */