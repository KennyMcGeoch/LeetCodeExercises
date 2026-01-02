/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 20ms Beats 18.64%
 * Memory 62.04MB Beats 20.34%
 */
var repeatedNTimes = function(nums) {
    let hash = {}
    let n = nums.length/2

    for (let i=0; i<nums.length; i++) hash[nums[i]] = (hash[nums[i]] || 0) + 1
    for (x in hash){
        if (hash[x] === n) return Number(x)
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 17ms Beats 21.19%
 * Memory 60.88MB Beats 30.51%
 */
var repeatedNTimes = function(nums) {
    let hash = {}
    let n = nums.length/2

    for (let i=0; i<nums.length; i++){
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
        if (hash[nums[i]] === n) return nums[i]
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 6ms Beats 42.37%
 * Memory 60.90MB Beats 30.51%
 */
var repeatedNTimes = function(nums) {
    let curr = 0
    let seen = new Set()
    let val = 0

    for (let i=0; i<nums.length; i++){
        if (val){
            if (seen.has(nums[i])){
                if (nums[i] === curr) val++
                else val--
            }
            else seen.add(nums[i])
        }
        else if(seen.has(nums[i])){
            curr = nums[i]
            val = 1
        }
        else seen.add(nums[i])
    }

    return curr
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 56.49MB Beats 89.83%
 */
var repeatedNTimes = function(nums) {
    let seen = new Set()

    for (let i=0; i<nums.length; i++){
        if (seen.has(nums[i])) return nums[i]
        else seen.add(nums[i])
    }

    return
};