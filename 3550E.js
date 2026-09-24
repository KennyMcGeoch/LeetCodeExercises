/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.72MB Beats 71.11%
 */
var smallestIndex = function(nums) {
    
    for (let i=0; i<Math.min(nums.length,28);i++){
        if (i === numTot(nums[i])) return i
    }

    function numTot(val){
        let tot = 0
        while (val){
            tot += val%10
            val = Math.floor(val/10)
        }
        return tot
    }

    return -1
};