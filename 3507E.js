/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats 94.29%
 * Memory 57.23MB Beats 30.00%
 */
var minimumPairRemoval = function(nums) {
    let ans = 0
    let min = 0
    let ind = 1

    function checkArr(){
        for (let i=1; i<nums.length; i++){
            if (nums[i] < nums[i-1]) return true
        }
        return false
    }

    while(checkArr()){
        min = nums[0] + nums[1]
        ind = 1
        for (let i=2; i<nums.length; i++){
            if (nums[i] + nums[i-1] < min){
                min = nums[i] + nums[i-1]
                ind = i
            }
        }
        nums[ind] += nums[ind-1]
        nums.splice(ind-1,1)
        ans++
    }

    return ans
};