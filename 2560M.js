/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 16ms Beats 96.43%
 * Memory 63.62MB Beats 35.71%
 */
var minCapability = function(nums, k) {
    let min = 0
    let max = Math.max(...nums)
    let curr

    while (max !== min){
        curr = Math.ceil((min+max)/2)-1
        if (check(curr)){
            max = curr
        }
        else min = curr + 1
    }

    function check(val){
        let tot = k
        for (let i=0; i<nums.length; i++){
            if (nums[i] <= val){
                i++
                if (tot-- === 1) return true
            }
        }
        return false
    }

    return max
};