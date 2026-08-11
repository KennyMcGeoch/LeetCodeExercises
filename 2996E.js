/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.69MB Beats 100.00%
 */
var missingInteger = function(nums) {
    let vals = new Set(nums)
    let curr = nums[0]
    let ind = 0
    while(nums[ind++] === nums[ind] - 1){
        curr += nums[ind]
    }

    if (curr > 50) return curr

    for (let i=curr; i<51; i++){
        if (vals.has(i) === false) return i
    }

    return 51
};