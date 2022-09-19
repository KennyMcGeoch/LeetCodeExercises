/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Runtime: 64 ms, faster than 93.23% of JavaScript online submissions for Remove Element.
Memory Usage: 41.8 MB, less than 87.32% of JavaScript online submissions for Remove Element.
 */
 var removeElement = function(nums, val) {

    let count = 0;
    let iterations = nums.length

    for (i=0; i<iterations; i++){
        if (nums[i] !== val){
            nums[count++] = nums[i]
        }
    }

    return count
    
};

removeElement([2,3,3,2],3)