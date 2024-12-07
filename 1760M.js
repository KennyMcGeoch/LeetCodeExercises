/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 * Runtime: 50 ms, faster than 37.04% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
 * Memory Usage: 59.9 MB, less than 90.32% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
 */
var minimumSize = function(nums, maxOperations) {
    let min = 1
    let max = 1000000000
    
    while (min+1 !== max){
        let cand = Math.ceil((min+max)/2)
        if (test(cand) == -1) min = cand
        else max = cand
    }
    
    function test(j){
        let count = 0 
        let valid = true
        for (let i=0; i<nums.length; i++){
            let temp = Math.ceil(nums[i]/j)
            if (temp > 1) count += temp-1
            if (count > maxOperations){
                i = nums.length
                valid = false
            }
        }
        if (valid) return j
        return -1
    }
    if (max === 2){
        if (test(1) === 1) return 1
    }
    
    return max
};

/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 * Runtime: 47 ms, faster than 40.74% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
 * Memory Usage: 60.3 MB, less than 74.19% of JavaScript online submissions for Minimum Limit of Balls in a Bag.
 */
var minimumSize = function(nums, maxOperations) {
    let min = 1
    let max = Math.max(...nums)
    if (max === 1) return 1
    
    while (min+1 !== max){
        let cand = Math.ceil((min+max)/2)
        if (test(cand) == -1) min = cand
        else max = cand
    }
    
    function test(j){
        let count = 0 
        let valid = true
        for (let i=0; i<nums.length; i++){
            let temp = Math.ceil(nums[i]/j)
            if (temp > 1) count += temp-1
            if (count > maxOperations){
                i = nums.length
                valid = false
            }
        }
        if (valid) return j
        return -1
    }
    if (max === 2){
        if (test(1) === 1) return 1
    }
    
    return max
};