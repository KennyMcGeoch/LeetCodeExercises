/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 0ms Beats 100.00%
 * Memory 58.33MB Beats 59.23%
 */
var findMissingElements = function(nums) {
    if (nums.length === 100) return []
    let ans = []
    let arr = new Array(101).fill(1)
    let min = 101
    let max = 0
    for (let i=0; i<nums.length; i++){
        min = Math.min(min, nums[i])
        max = Math.max(max,nums[i])
        arr[nums[i]] = 0
    }
    for (let i=min+1; i<max; i++){
        if (arr[i]) ans.push(i)
    }

    return ans
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime 1ms Beats 99.23%
 * Memory 58.63MB Beats 41.54%
 */
var findMissingElements = function(nums) {
    let ans = []
    nums.sort((a,b)=>a-b)
    let curr = nums[0] + 1
    let ind = 1
    while(ind < nums.length){
        if (nums[ind] === curr){
            ind++
        }
        else ans.push(curr)
        curr++
    }
    return ans
};