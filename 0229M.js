/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 116 ms, faster than 38.60% of JavaScript online submissions for Majority Element II.
Memory Usage: 43.4 MB, less than 73.38% of JavaScript online submissions for Majority Element II.
 */

var majorityElement = function(nums) {

    let iterations = nums.length
    let majorityNum = iterations/3
    let valueStore = {}
    let solution = []

    for (i=0; i<iterations; i++){
        if (valueStore[nums[i]] === undefined){
            valueStore[nums[i]] = 1
        }
        else if (valueStore[nums[i]] === -1){
        }
        else{
            valueStore[nums[i]]++
        }
        if (valueStore[nums[i]]>majorityNum){
            solution.push(nums[i]) 
            valueStore[nums[i]] = -1
        }
    }

    return solution
    
};