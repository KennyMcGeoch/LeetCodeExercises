/**
 * @param {string} s
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 55.44MB Beats 94.59%
 */
var maxDifference = function(s) {
    let arr = new Array(26).fill(0)
    let minEven = Infinity
    let maxOdd = 0

    for (let i=0; i<s.length; i++) arr[s.charCodeAt(i)-97]++

    for (let i=0; i<26; i++){
        if (arr[i]){
            if (arr[i] % 2 === 0) minEven = Math.min(arr[i],minEven)
            else maxOdd = Math.max(arr[i],maxOdd)
        }
    }

    return maxOdd - minEven

};