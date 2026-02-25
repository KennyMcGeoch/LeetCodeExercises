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

/**
 * @param {number[]} arr
 * @return {number[]}
 * Runtime 17ms Beats 42.37%
 * Memory 58.23MB Beats 69.49%
 */
 var sortByBits = function(arr) {

    let hash = {}
    let temp = 0
    let num = 0

    for (let i=0; i<arr.length; i++){
        if (hash[arr[i]] === undefined) conv(arr[i])
    }    

    function conv(n){
        temp = 0
        num = n
        while(num){
            num &= (num-1)
            temp++
        }
        hash[n] = temp
    }

    return arr.sort((a,b) => {
        if (hash[a] !== hash[b]) return hash[a]-hash[b]
        else return a-b
    })
    
};

/**
 * @param {number[]} arr
 * @return {number[]}
 * Runtime 6ms Beats 76.27%
 * Memory 56.20MB Beats 96.61%
 */
 var sortByBits = function(arr) {

    let temp = 0
    let num = 0
    let countA = 0
    let countB = 0

    function conv(n){
        temp = 0
        num = n
        while(num){
            num &= (num-1)
            temp++
        }
        return temp
    }

    return arr.sort((a,b) => {
        countA = conv(a)
        countB = conv(b)
        if (countA !== countB) return countA - countB
        else return a-b
    })
    
};