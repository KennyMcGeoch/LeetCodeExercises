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

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 54 ms, faster than 82.21% of JavaScript online submissions for Majority Element.
 * Memory Usage: 50.2 MB, less than 37.47% of JavaScript online submissions for Majority Element.
 */
var majorityElement = function(nums) {

    let lead = nums[0]
    let max = 1
    
    for (let i=0; i<nums.length; i++){
        if (nums[i] === lead) max++
        else{
            max--
            if (max === 0){
                lead = nums[i]
                max++
            }
        }
    }
     
     return lead
    
};