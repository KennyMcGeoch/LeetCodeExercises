/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Runtime: 94 ms, faster than 70.02% of JavaScript online submissions for Kth Missing Positive Number.
 * Memory Usage: 41.9 MB, less than 95.43% of JavaScript online submissions for Kth Missing Positive Number.
 */
 var findKthPositive = function(arr, k) {

    let iterations = arr.length
    let expNum = 0

    for (i=0; i< iterations; i++){
        expNum++
        if (arr[i] !== expNum){
            k--
            i--
        }
        if (k===0)return expNum
    }
    
    return expNum + k    
};