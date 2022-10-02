/**
 * @param {number[]} arr
 * @return {boolean}
 * Runtime: 93 ms, faster than 59.38% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
 * Memory Usage: 41.8 MB, less than 94.64% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
 */
 var canMakeArithmeticProgression = function(arr) {

    arr.sort(function(a, b){return a-b});

    let gap = arr[1] - arr[0]
    let compareVal = arr[0]
    let iterations = arr.length

    for (i=0; i<iterations; i++){
        if (arr[i] === compareVal){
            compareVal += gap
        }
        else{
            return false
        }
    }

    return true    
};