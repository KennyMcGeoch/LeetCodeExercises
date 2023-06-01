/**
 * @param {number[]} nums
 * Runtime: 63 ms, faster than 38.07% of JavaScript online submissions for Array Wrapper.
 * Memory Usage: 42.3 MB, less than 93.29% of JavaScript online submissions for Array Wrapper.
 */
var ArrayWrapper = function(nums) {
    this.nums = nums
    this.total = 0
    
};

ArrayWrapper.prototype.valueOf = function() {
    for (i = 0; i < this.nums.length; i++){
        this.total += this.nums[i]
    }
    return this.total
}

ArrayWrapper.prototype.toString = function(Arr) {
    return JSON.stringify(this.nums)
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */