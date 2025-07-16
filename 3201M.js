/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 3ms Beats 100.00%
 * Memory 66.65MB Beats 100.00%
 */
var maximumLength = function(nums) {
    let odd = 0
    let even = 0
    let opp = 0
    let curr = -1

    for (let i=0; i<nums.length; i++){
        if (nums[i] % 2 === 0){
            even++
            if (curr !== 0){
                opp++
                curr = 0
            }
        }
        else{
            odd++
            if (curr !== 1){
                opp++
                curr = 1
            }
        }
    }

    return Math.max(even,odd,opp)
};