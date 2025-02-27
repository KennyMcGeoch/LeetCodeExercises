/**
 * @param {number[]} arr
 * @return {number}
 * Runtime 288ms Beats 31.58%
 * Memory 58.28MB Beats 42.11%
 */
var lenLongestFibSubseq = function(arr) {
    let set = new Set()
    let ans = 0
    for (let i=0; i<arr.length; i++) set.add(arr[i])
    
    function findLen(a,b,len){
        if (set.has(a+b)) return findLen(b,a+b,len+1)
        else if (len > 2) ans = Math.max(ans,len)
        return
    }

    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            findLen(arr[i],arr[j],2)
        }
    }

    return ans
};