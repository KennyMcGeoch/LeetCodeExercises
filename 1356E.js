/**
 * @param {number[]} arr
 * @return {number[]}
 * Runtime: 125 ms, faster than 71.49% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
 * Memory Usage: 45.5 MB, less than 41.96% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
 */
 var sortByBits = function(arr) {

    let iterations = arr.length
    let binaryConvert = {}
    let total

    for (i=0; i<iterations; i++){
        if (binaryConvert[arr[i]] === undefined){
            total = arr[i].toString(2)
            binaryConvert[arr[i]] = 0
            for (j=0; j<total.length;j++){
                if (total[j]==="1")binaryConvert[arr[i]]++
            }
        }
    }
    arr.sort(function(a, b){return a-b});
    return arr.sort(function(a, b){return binaryConvert[a] - binaryConvert[b]});
    
};

/**
 * @param {number[]} arr
 * @return {number[]}
 * Runtime: 71 ms, faster than 69.91% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
 * Memory Usage: 44.9 MB, less than 56.48% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
 */
var sortByBits = function(arr) {

    let iterations = arr.length
    let ans = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    arr.sort((a,b)=>a-b)

    for (i=0; i<iterations; i++){
        let test = arr[i].toString(2)
        let total = 0
        for (j=0; j<test.length;j++){
                if (test[j]==="1")total++
        }
        ans[total].push(arr[i])
    }
    return ans.flat()
    
};