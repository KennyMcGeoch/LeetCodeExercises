/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 60 ms, faster than 99.24% of JavaScript online submissions for Single Number III.
Memory Usage: 42.3 MB, less than 94.92% of JavaScript online submissions for Single Number III.
 */
 var singleNumber = function(nums) {
    
    let solution = []
    let iterations = nums.length - 1

    nums.sort(function(a, b){return a-b});
     
    if (nums[0] !== nums[1]){
        solution.push(nums[0])
    }

    for (i=1; i< iterations; i++){
        if (nums[i]!== nums[i+1] && nums[i] !== nums[i-1]){
            solution.push(nums[i])
            if (solution.length === 2) return solution
        }
    }

    solution.push(nums[iterations])

    return solution
    
};

singleNumber([1,2,3,4,5,1,2,3,4,5])