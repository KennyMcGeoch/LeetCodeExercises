/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 6ms Beats 63.64%
 * Memory 60.26MB Beats 27.27%
 */
var sumCounts = function(nums) {
    let ans = 0

    for (let i=0; i<nums.length; i++){
        let curr = new Set()
        for (let j=i; j<nums.length; j++){
            curr.add(nums[j])
            ans += (curr.size ** 2)
        }
    }

    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 5ms Beats 63.64%
 * Memory 60.00MB Beats 45.45%
 */
var sumCounts = function(nums) {
    let ans = 0

    for (let i=0; i<nums.length; i++){
        let curr = new Set()
        for (let j=i; j<nums.length; j++){
            curr.add(nums[j])
            ans += Math.pow(curr.size,2)
        }
    }

    return ans
};