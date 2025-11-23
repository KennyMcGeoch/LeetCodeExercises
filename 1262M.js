/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 4ms Beats 100.00%
 * Memory 60.23MB Beats 89.66%
 */
var maxSumDivThree = function(nums) {
    let total  = nums.reduce((a,b)=>a+b)
    if (total % 3 === 0) return total
    let min = Infinity
    let minTwo = Infinity
    let minThree = Infinity
    if (total % 3 === 1){
        for (let i=0; i<nums.length; i++){
            if (nums[i] % 3 === 1) minThree = Math.min(minThree, nums[i])
            else if (nums[i] % 3 === 2){
                if (nums[i] < min){
                    minTwo = min
                    min = nums[i]
                }
                else if(nums[i] < minTwo) minTwo = nums[i]
            }
        }
        if (minTwo === Infinity || min === Infinity) return total - minThree
        else if (minThree === Infinity) return total - (min + minTwo)
        else return total - Math.min(min+minTwo, minThree)
    }
    for (let i=0; i<nums.length; i++){
            if (nums[i] % 3 === 2) minThree = Math.min(minThree, nums[i])
            else if (nums[i] % 3 === 1){
                if (nums[i] < min){
                    minTwo = min
                    min = nums[i]
                }
                else if(nums[i] < minTwo) minTwo = nums[i]
            }
        }
        if (minTwo === Infinity || min === Infinity) return total - minThree
        else if (minThree === Infinity) return total - (min + minTwo)
        else return total - Math.min(min+minTwo, minThree)
};