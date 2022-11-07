/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 68 ms, faster than 97.24% of JavaScript online submissions for Divide Array Into Equal Pairs.
 * Memory Usage: 44.2 MB, less than 79.83% of JavaScript online submissions for Divide Array Into Equal Pairs.
 */
 var divideArray = function(nums) {

    let iterations = nums.length
    let hash = {}

    for (i=0; i<iterations; i++){
        if (hash[nums[i]] === undefined){
            hash[nums[i]] = 1
        }
        else hash[nums[i]]++
    }

    let result = Object.values(hash)

    for (i=0; i<result.length; i++){
        if (result[i] % 2 === 1)return false
    }

    return true
    
};