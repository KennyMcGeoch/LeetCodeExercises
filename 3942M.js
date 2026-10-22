/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 11ms Beats-%
 * Memory 68.91MB Beats 100.00%
 */
var minOperations = function(nums) {
    if (nums.length === 1) return 0
    if (nums.length === 2){
        if (nums[0] < nums[1]) return 0
        else return 1
    }
    let len = nums.length

    let start = nums.indexOf(0)
    let asc = true
    if (nums[(start+1)%len] > nums[(start-1+len)%len]) asc = false
    
    if (asc){
        for (let i=start+1; i<start+len-1; i++){
            if (nums[i%len] > nums[(i+1)%len]) return -1
        }
        return Math.min(start, len-start+2)
    }
    else{
        for (let i=start+1; i<start+len-1; i++){
            if (nums[i%len] < nums[(i+1)%len]) return -1
        }
        return Math.min(len-start,start+2)
    }

};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 9ms Beats-%
 * Memory 68.23MB Beats 100.00%
 */
var minOperations = function(nums) {
    if (nums.length === 1) return 0
    if (nums.length === 2){
        if (nums[0] < nums[1]) return 0
        else return 1
    }
    let len = nums.length

    let start = nums.indexOf(0)
    let asc
    if (nums[(start+1) % len] === 1) asc = true
    else if (nums[(start+1) % len] === len-1) asc = false
    else return -1
    let count = 0
    let ind = start
    if (asc){
        while(count < len-1){
            ind++
            ind %=len
            if (nums[ind] !== ++count) return -1
        }
        return Math.min(start, len-start+2)
    }
    else{
        while(count < len-1){
            ind--
            if (ind < 0) ind += len
            if (nums[ind] !== ++count) return -1
        }
        return Math.min(len-start,start+2)
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 3ms Beats 50.00%
 * Memory 68.47MB Beats 100.00%
 */
var minOperations = function(nums) {
    if (nums.length === 1) return 0
    if (nums.length === 2){
        if (nums[0] < nums[1]) return 0
        else return 1
    }
    let len = nums.length

    let start = nums.indexOf(0)
    let asc = true
    let desc = true
    for (let i=1; i<len; i++){
        if (nums[(i+start) % len] !== i) asc = false
        if (nums[(i+start) % len] !== len - i) desc = false
        if (!asc && !desc) return -1
    }

    if (asc)  return Math.min(start, len-start+2)
    else return Math.min(len-start,start+2)


};