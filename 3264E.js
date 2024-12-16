/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 * Runtime: 7 ms, faster than 21.94% of JavaScript online submissions for Final Array State After K Multiplication Operations I.
 * Memory Usage: 51.9 MB, less than 71.70% of JavaScript online submissions for Final Array State After K Multiplication Operations I.
 */
var getFinalState = function(nums, k, multiplier) {
    let order = new Array(nums.length)
    for (let i=0; i<order.length; i++) order[i] = i
    order.sort((a,b)=>nums[a] - nums[b])
    while(k--){
        nums[order[0]] *= multiplier
        let temp = 0
        while(nums[order[temp]] > nums[order[temp+1]] || nums[order[temp]] === nums[order[temp+1]] && order[temp] > order[temp+1] ){
            let curr = order[temp]
            order[temp] = order[temp+1]
            order[temp+1] = curr
            temp++
        }
    }
    return nums
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 * Runtime: 3 ms, faster than 30.97% of JavaScript online submissions for Final Array State After K Multiplication Operations I.
 * Memory Usage: 53.2 MB, less than 20.13% of JavaScript online submissions for Final Array State After K Multiplication Operations I.
 */
var getFinalState = function(nums, k, multiplier) {
    let order = new Array(nums.length)
    for (let i=0; i<order.length; i++) order[i] = i
    order.sort((a,b)=>nums[a] - nums[b])
    while(k--){
        nums[order[0]] *= multiplier
        let temp = 0
        while(nums[order[temp]] > nums[order[temp+1]]){
            let curr = order[temp]
            order[temp] = order[temp+1]
            order[temp+1] = curr
            temp++
        }
        while(nums[order[temp]] === nums[order[temp+1]] && order[temp] > order[temp+1] ){
            let curr = order[temp]
            order[temp] = order[temp+1]
            order[temp+1] = curr
            temp++
        }
    }
    return nums
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 * Runtime: 1 ms, faster than 86.45% of JavaScript online submissions for Final Array State After K Multiplication Operations I.
 * Memory Usage: 51.7 MB, less than 92.45% of JavaScript online submissions for Final Array State After K Multiplication Operations I.
 */
var getFinalState = function(nums, k, multiplier) {
    let min = Infinity
    let ind = 0
    for (let i=0; i<k; i++){
        min = Infinity
        for (let j=0; j<nums.length; j++){
            if (nums[j] < min){
                min = nums[j]
                ind = j
            }
        }
        nums[ind] *= multiplier
    }
    return nums
};