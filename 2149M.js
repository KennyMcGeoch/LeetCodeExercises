/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 273 ms, faster than 91.06% of JavaScript online submissions for Rearrange Array Elements by Sign.
Memory Usage: 96 MB, less than 47.15% of JavaScript online submissions for Rearrange Array Elements by Sign.
 */
var rearrangeArray = function(nums) {
    
    let ans = new Array(nums.length)
    let pos = -2
    let neg = -1
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] < 0) ans[neg +=2] = nums[i]
        else ans[pos +=2] = nums[i]
    }
    
    return ans

};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 284 ms, faster than 77.84% of JavaScript online submissions for Rearrange Array Elements by Sign.
 * Memory Usage: 94.2 MB, less than 67.68% of JavaScript online submissions for Rearrange Array Elements by Sign.
 */
var rearrangeArray = function(nums) {
    
    let ans = new Array(nums.length)
    let pos = 0
    let neg = 1
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] < 0){
             ans[neg] = nums[i]
            neg += 2
        }
        else{
            ans[pos] = nums[i]
            pos += 2
        }
    }
    
    return ans
    
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 336 ms, faster than 22.36% of JavaScript online submissions for Rearrange Array Elements by Sign.
 * Memory Usage: 95.9 MB, less than 48.78% of JavaScript online submissions for Rearrange Array Elements by Sign.
 */
var rearrangeArray = function(nums) {
    
    let ans = []
    let pos = []
    let neg = []
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] < 0) neg.push(nums[i])
        else pos.push(nums[i])
    }
    for (let i=0; i<pos.length; i++){
        ans.push(pos[i])
        ans.push(neg[i])
    }
    
    return ans
    
};