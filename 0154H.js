/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 52.76MB Beats 96.95%
 */
 var findMin = function(nums) {
    return Math.min(...nums)
 }

 /**
 * @param {number[]} nums
 * @return {number}
 * Runtime 3ms Beats 4.20%
 * Memory 55.22MB Beats 14.89%
 */
 var findMin = function(nums) {
    let minPos = 0
    let maxPos = nums.length-1
    if (nums[minPos] < nums[maxPos]) return nums[minPos]
    if (nums[minPos] === nums[maxPos]){
        for (let i=1; i<nums.length; i++){
            if (nums[i] < nums[i-1]) return nums[i]
        }
        return nums[0]
    }

    while (maxPos - minPos > 1){
        test = Math.ceil((minPos + maxPos) / 2)
        console.log(minPos,test,maxPos)
        if (nums[test] > nums[minPos]) minPos = test
        else if (nums[test] === nums[minPos]) minPos++
        if (nums[test] < nums[maxPos]) maxPos = test
        else if (nums[test] === nums[maxPos]) maxPos--
        console.log(minPos,test,maxPos)
    }

    return Math.min(nums[maxPos],nums[minPos])
    
};