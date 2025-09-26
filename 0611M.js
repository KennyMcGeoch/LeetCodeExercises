/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 22ms Beats 93.62%
 * Memory 55.28MB Beats 94.04%

 */
var triangleNumber = function(nums) {
    let ans = 0
    let left = 0
    let right = 0

    nums.sort((a,b)=>a-b)

    for (let i=2; i<nums.length; i++){
        if ((nums[i-1]) * 2 < nums[i]) continue
        right = i-1
        left = 0
        while(left < right){
            if ((nums[left] + nums[right]) > nums[i]){
                 ans += (right -left)
                 right-- 
            }
            else left++
        }
    }

    return ans
};