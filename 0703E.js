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

/**
 * @param {number} k
 * @param {number[]} nums
 * Runtime: 161 ms, faster than 35.27% of JavaScript online submissions for Kth Largest Element in a Stream.
 * Memory Usage: 57.6 MB, less than 99.25% of JavaScript online submissions for Kth Largest Element in a Stream.
 */
var KthLargest = function(k, nums) {
    this.arr = nums.sort((a,b)=>b-a)
    this.max = k
    while (this.arr.length > k){
        this.arr.pop()
    }
    while (this.arr.length < k) this.arr.push(-100000)
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let ind = this.arr.findIndex((a)=> a < val)
    if (ind === -1) return this.arr[this.max-1]
    else if (ind === 0) this.arr.unshift(val)
    else{
        for (let i=this.arr.length-1; i>=ind; i--){
            this.arr[i+1] = this.arr[i]
        }
        this.arr[ind] = val
    }
    while(this.arr.length > this.max) this.arr.pop()
    return this.arr[this.max-1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */