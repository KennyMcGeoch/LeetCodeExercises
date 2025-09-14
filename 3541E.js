/**
 * @param {string} s
 * @return {number}
 * Runtime 1ms Beats 99.43%
 * Memory 56.72MB Beats 53.72%
 */
var maxFreqSum = function(s) {
    let arr = new Array(26).fill(0)

    for (let i=0; i<s.length; i++) arr[s.charCodeAt(i)-97]++

    return Math.max(arr[0],arr[4], arr[8], arr[14], arr[20]) + Math.max(arr[1], arr[1], arr[2], arr[3], arr[5], 
    arr[6], arr[7], arr[9], arr[10], arr[11], arr[12], arr[13], arr[15], arr[16], arr[17], arr[18], arr[19], arr[21], arr[22], arr[23], arr[24], arr[25] )
};