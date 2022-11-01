/**
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 138 ms, faster than 18.53% of JavaScript online submissions for Permutations.
 * Memory Usage: 44.6 MB, less than 87.32% of JavaScript online submissions for Permutations.
 */
 var permute = function(nums) {

    let solution = []
    let iterations = nums.length

    for (j=0; j<iterations; j++){
        combi([nums[j]])
    }

    function combi(arr){
        if (arr.length === iterations){
            solution.push(arr)
            return
        }
        for (let i=0; i<iterations; i++){
            if (arr.includes(nums[i]))continue
            let temp = [...arr]
            temp.push(nums[i])
            combi(temp)
        }
        return
    }

    return solution
    
};