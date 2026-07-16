/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 172ms Beats63.64%
 * Memory 81.66MB Beats 90.91%
 */
var gcdSum = function(nums) {
    
    let prefixArr = new Array(nums.length)
    prefixArr[0] = nums[0]
    let max = nums[0]

    for (let i=1; i<nums.length; i++){
        max = Math.max(max,nums[i])
        prefixArr[i] = GCD(max,nums[i])
    }

    let left = 0
    let ans = 0
    let right = nums.length-1

    prefixArr.sort((a,b)=>b-a)

    while(left < right){
        ans += GCD(prefixArr[left++], prefixArr[right--])
    }

    function GCD(a,b){
        if (a % b === 0) return b
        return GCD(b, a%b)
    }

    return ans
};