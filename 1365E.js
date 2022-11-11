/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 91 ms, faster than 89.21% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 * Memory Usage: 44.3 MB, less than 45.58% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 */
 var smallerNumbersThanCurrent = function(nums) {

    let rank = [...nums].sort((a,b)=>a-b)
    let iterations = nums.length
    let solution = []

    for (i=0; i<iterations; i++){
        solution.push(rank.findIndex((elem)=> elem === nums[i]))
    }
    
    return solution
};