/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 59 ms, faster than 59.05% of JavaScript online submissions for Majority Element II.
 * Memory Usage: 43.4 MB, less than 58.10% of JavaScript online submissions for Majority Element II.
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

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 53 ms, faster than 84.76% of JavaScript online submissions for Majority Element II.
 * Memory Usage: 45.2 MB, less than 21.59% of JavaScript online submissions for Majority Element II.
 */
var majorityElement2 = function(nums) {

    let third = parseInt(nums.length/3)
    let solution = []
    nums.sort((a,b)=>a-b)

    for (i=0; i<nums.length; i++){
        if (nums[i] === nums[i+third] && (solution.includes(nums[i]) === false)){
            solution.push(nums[i])
            i+= third-1 // skip
        }
    }

    return solution
    
};