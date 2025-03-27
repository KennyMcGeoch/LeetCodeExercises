/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 92ms Beats 16.67% 
 * Memory 83.38MB Beats 16.67%
 */
var minimumIndex = function(nums) {
    let hash = {}
    for (let i=0; i<nums.length; i++) hash[nums[i]] = (hash[nums[i]] || 0) + 1
    let max = 0
    let num = 0
    for (x in hash){
        if (hash[x] > max){
            max = hash[x]
            num = x
        }
    }
    if (2*max - nums.length < 2) return -1
    let curr = 0
    for (let i=0; i<nums.length; i++){
        if (nums[i] == num){
            if (++curr === 1) return i
        }
        else curr--
    }
};