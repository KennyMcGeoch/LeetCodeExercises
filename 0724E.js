/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 156 ms, faster than 30.66% of JavaScript online submissions for Find Pivot Index.
Memory Usage: 44 MB, less than 95.75% of JavaScript online submissions for Find Pivot Index.
 */
 var pivotIndex = function(nums) {
    const sum = nums.reduce((partialSum, a) => partialSum + a, 0);
    let arrayCount = 0;
    for (i=0; i<nums.length; i++){
        if (arrayCount === ((sum)- nums[i])/2){
            return i
        }
        arrayCount += nums[i]
    }
    return -1
    
};

pivotIndex([1,7,3,6,5,6]);
