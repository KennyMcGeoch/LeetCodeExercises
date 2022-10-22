/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 * Runtime: 122 ms, faster than 31.60% of JavaScript online submissions for Find the Distance Value Between Two Arrays.
 * Memory Usage: 42.6 MB, less than 75.00% of JavaScript online submissions for Find the Distance Value Between Two Arrays. 
 */
 var findTheDistanceValue = function(arr1, arr2, d) {

    let count = 0
    let iterations = arr1.length

    for (i=0; i<iterations; i++){
        if (arr2.findIndex((a)=> a >= arr1[i] - d && a <= arr1[i] + d) === -1)count++
    }

    return count    
};