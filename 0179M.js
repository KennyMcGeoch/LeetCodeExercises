/**
 * @param {number[]} nums
 * @return {string}
 * Runtime: 48 ms, faster than 91.01% of JavaScript online submissions for Largest Number.
 * Memory Usage: 50.6 MB, less than 73.20% of JavaScript online submissions for Largest Number.
 */
var largestNumber = function(nums) {
    
    for (let i=0; i<nums.length; i++) nums[i] = nums[i].toString()
    nums.sort((a,b)=>{
        const concateStrs = a + b;
        const concateStrs2 = b + a;
        return concateStrs > concateStrs2 ? -1 : (concateStrs === concateStrs2 ? 0 : 1);
    })
    if (nums[0][0] === "0") return "0"
    
    return nums.join("")
    
};