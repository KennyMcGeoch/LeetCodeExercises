/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 12 ms, faster than 16.67% of JavaScript online submissions for Shortest Subarray to be Removed to Make Array Sorted.
 * Memory Usage: 61.5 MB, less than 7.14% of JavaScript online submissions for Shortest Subarray to be Removed to Make Array Sorted.
 */
var findLengthOfShortestSubarray = function(arr) {
    let right = arr.length-1
    let left = 0
    let ans = Infinity
    
    for (let i=0; i<arr.length; i++){
        if (i && arr[i] < arr[i-1]){
            i = arr.length
            continue
        }
        while (right < arr.length-1 && arr[right] < arr[i]) right++
        while (right > i && arr[right] >= arr[i] && arr[right] >= arr[right-1]) right--
        ans = Math.min(ans, right - i - (arr[i] <= arr[right]))
    }
    
    for (let i=arr.length-1; i>-1; i--){
        if (i < arr.length - 1 && arr[i] > arr[i+1]){
            i = -1
            continue
        }
        while (left < i && arr[left] <= arr[i] && arr[left] <= arr[left+1]) left++
        while (arr[left] > arr[i] && left > 0) left--
        ans = Math.min(ans, i - left - (arr[left] <= arr[i]))
    }
    
    
    
    if (ans < 1) return 0
    return ans
};