/**
 * @param {number[]} arr
 * @return {boolean}
 * Runtime: 104 ms, faster than 47.85% of JavaScript online submissions for Check If N and Its Double Exist.
 * Memory Usage: 44.8 MB, less than 11.20% of JavaScript online submissions for Check If N and Its Double Exist.
 */
 var checkIfExist = function(arr) {

    let iterations = arr.length

    let hashmap = {}
    let zeroCount = 0

    for (i=0; i<iterations; i++){
        if (arr[i] === 0) zeroCount++
        else hashmap[arr[i]] = true
    }

    for (i=0; i<iterations; i++){
        let target = arr[i] * 2
        if (hashmap[target] !== undefined)return true
    }

    if (zeroCount > 1)return true

    return false
    
};