/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 86 ms, faster than 77.42% of JavaScript online submissions for Majority Element.
Memory Usage: 43.5 MB, less than 79.25% of JavaScript online submissions for Majority Element.
 */
 var majorityElement = function(nums) {

    let iterations = nums.length
    let majorityNum = iterations/2
    let valueStore = {}

    for (i=0; i<iterations; i++){
        if (valueStore[nums[i]] === undefined){
            valueStore[nums[i]] = 1
        }
        else{
            valueStore[nums[i]]++
        }
        if (valueStore[nums[i]]>majorityNum){
            return nums[i]
        }
    }

    return
    
};