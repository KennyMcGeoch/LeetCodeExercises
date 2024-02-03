/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Runtime: 50 ms, faster than 97.22% of JavaScript online submissions for Partition Array for Maximum Sum.
 * Memory Usage: 49.3 MB, less than 13.89% of JavaScript online submissions for Partition Array for Maximum Sum.
 */
var maxSumAfterPartitioning = function(arr, k) {
    
    let hash = {}
    let max = 0
    for (let i=0; i<k; i++){
        max = Math.max(max, arr[i])
        hash[i] = max * (i+1)
    }
    for (let i=k; i<arr.length; i++){
        let tempMax = arr[i]
        let tempTot = tempMax + hash[i-1]
        for (let j=1; j<k; j++){
            tempMax = Math.max(tempMax, arr[i-j])
            tempTot = Math.max(tempTot, hash[(i-j)-1] + (tempMax * (j+1)))
        }
        hash[i] = tempTot
    }
    return hash[arr.length-1]
    
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * Runtime: 44 ms, faster than 100.00% of JavaScript online submissions for Partition Array for Maximum Sum.
 * Memory Usage: 49.4 MB, less than 9.72% of JavaScript online submissions for Partition Array for Maximum Sum.
 */
var maxSumAfterPartitioning = function(arr, k) {
    
    let hash = []
    let max = 0
    for (let i=0; i<k; i++){
        max = Math.max(max, arr[i])
        hash[i] = max * (i+1)
    }
    for (let i=k; i<arr.length; i++){
        let tempMax = arr[i]
        let tempTot = tempMax + hash[i-1]
        for (let j=1; j<k; j++){
            tempMax = Math.max(tempMax, arr[i-j])
            tempTot = Math.max(tempTot, hash[(i-j)-1] + (tempMax * (j+1)))
        }
        hash[i] = tempTot
    }
    return hash[arr.length-1]
    
};