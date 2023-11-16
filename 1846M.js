/**
 * @param {number[]} arr
 * @return {number}
 * Runtime: 58 ms, faster than 100.00% of JavaScript online submissions for Maximum Element After Decreasing and Rearranging.
 * Memory Usage: 51.7 MB, less than 80.95% of JavaScript online submissions for Maximum Element After Decreasing and Rearranging.
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b)=>a-b)
    let ans = 1
    
    for (let i=0 ; i<arr.length; i++){
        if (arr[i] >= ans)ans++
    }

    
    return ans-1
};