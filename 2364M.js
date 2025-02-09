/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 154ms Beats 15.63%
 * Memory 82.65MB Beats 15.63%
 */
var countBadPairs = function(nums) {
    if (nums.length < 2) return 0
    let curr = 0
    let hash = {}

    for (let i=0; i<nums.length; i++){
        if (hash[nums[i]-i] === undefined) hash[nums[i]-i] = 0
        else hash[nums[i]-i]++
    }
    let ans = 0

    for (let i=nums.length-1; i>0; i--) ans += i

    for (x in hash){
        if (hash[x]){
            curr = 0
            for (let i=hash[x]; i>0; i--) curr += i
            ans -= curr
        }
    }

    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 192ms Beats 6.25%
 * Memory 78.58MB Beats 15.63%
 */
var countBadPairs = function(nums) {
    if (nums.length < 2) return 0
    let curr = 0
    let hash = {}

    for (let i=0; i<nums.length; i++){
        if (hash[nums[i]-i] === undefined) hash[nums[i]-i] = 1
        else hash[nums[i]-i]++
    }
    let ans = nums.length * (nums.length-1)/2

    for (x in hash){
        if (hash[x]){
            ans -= (hash[x] * (hash[x]-1)/2)
        }
    }

    return ans
};