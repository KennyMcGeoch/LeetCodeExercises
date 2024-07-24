/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 569 ms, faster than 37.50% of JavaScript online submissions for Sort the Jumbled Numbers.
 * Memory Usage: 66.6 MB, less than 100.00% of JavaScript online submissions for Sort the Jumbled Numbers.
 */
var sortJumbled = function(mapping, nums) {
    let converted = {}
    
    for (let i=0; i<nums.length; i++){
        let num = 0
        let str = nums[i].toString()
        for (j=0; j<str.length; j++){
            num *= 10
            num += mapping[str[j]]
        }
        converted[nums[i]] = num
    }
    return nums.sort((a,b)=>converted[a]-converted[b])
    
};