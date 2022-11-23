/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * Runtime: 117 ms, faster than 58.42% of JavaScript online submissions for Duplicate Zeros.
 * Memory Usage: 44.3 MB, less than 40.93% of JavaScript online submissions for Duplicate Zeros.
 */
 var duplicateZeros = function(arr) {

    let zeroCount = []
    let zero = 0
    let iterations = arr.length

    for (i=0; i<iterations; i++){
        if (arr[i] === 0)zero++
        zeroCount.push(zero)
    }

    for (i=iterations-1; i > -1; i--){
        if (i + zeroCount[i] < iterations){
            arr[i+zeroCount[i]] = arr[i]
            if (arr[i]===0)arr[i-1+zeroCount[i]] = arr[i]
        }
        else if(i + zeroCount[i] <= iterations){
            if (arr[i]===0)arr[i-1+zeroCount[i]] = arr[i]
        }
    }
    return
};