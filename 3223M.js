/**
 * @param {string} s
 * @return {number}
 * Runtime 14ms Beats 100.00%
 * Memory 60.28MB Beats 60.00%
 */
var minimumLength = function(s) {
    let ans = 0
    let arr = new Array(26).fill(0)
    for (let i=0; i<s.length; i++) arr[s.charCodeAt(i)-97]++
    for (let i=0; i<26; i++){
        if (arr[i] < 3) ans += arr[i]
        else if(arr[i] % 2 === 1) ans += 1
        else ans += 2
    }
    return ans
};