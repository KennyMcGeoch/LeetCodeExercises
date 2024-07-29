/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 240 ms, faster than 46.15% of JavaScript online submissions for Sort an Array.
 * Memory Usage: 74.9 MB, less than 29.04% of JavaScript online submissions for Sort an Array.
 */
var sortArray = function(nums) {
    
    if (nums.length < 2) return nums
    let arr = []
    let left = []
    let right = []
    for (let i=0; i<nums.length; i++){
        if (i < nums.length/2) left.push(nums[i])
        else right.push(nums[i])
    }
    left = sortArray(left)
    right = sortArray(right)
    let lInd = 0
    let rInd = 0
    while(lInd < left.length && rInd < right.length){
        if (left[lInd] < right[rInd]) arr.push(left[lInd++])
        else arr.push(right[rInd++])
    }
    while(lInd < left.length) arr.push(left[lInd++])
    while(rInd < right.length) arr.push(right[rInd++])
    return arr        

};

/**
 * @param {number[]} nums
 * @return {number[]}
 * Runtime: 167 ms, faster than 96.92% of JavaScript online submissions for Sort an Array.
 * Memory Usage: 68 MB, less than 84.62% of JavaScript online submissions for Sort an Array.
 */
var sortArray = function(nums) {
    
    return nums.sort((a,b)=>a-b)

}