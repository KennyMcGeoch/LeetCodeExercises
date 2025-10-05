/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 161 ms, faster than 46.02% of JavaScript online submissions for Largest Perimeter Triangle.
 * Memory Usage: 45.3 MB, less than 66.02% of JavaScript online submissions for Largest Perimeter Triangle.
 */
 var largestPerimeter = function(nums) {

    nums.sort(function(a, b){return b - a})
    let loops = nums.length

    while (nums[0] >= nums[1] + nums[2] && loops > 3){
        nums.splice(0,1)
        loops--
    }

    if (nums[0] === 0 || nums[1] === 0 || nums[2] === 0){
        return 0
    }

    if (nums[0] >= nums[1] + nums[2]){
        return 0
    }
     
return nums[0] + nums[1] + nums[2]
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 23ms Beats 86.26%
 * Memory 56.41MB Beats 94.66%
 */
 var largestPerimeter = function(nums) {

    nums.sort((a,b)=>b-a)

    for (let i=0; i<nums.length-2; i++){
        if (nums[i] < nums[i+1]+nums[i+2]) return nums[i] + nums[i+1] + nums[i+2]
    }
     
return 0
    
};