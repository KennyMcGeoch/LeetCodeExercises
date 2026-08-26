/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * Runtime 0ms Beats 100.00%
 * Memory 55.80MB Beats 93.33%
 */
var shortestBeautifulSubstring = function(s, k) {
    let ans = ""
    let len = 101

    let left = 0
    let right = 0
    let curr = 0
    while(s[left] === "0"){
        left++
        right++
    }
    while(right < s.length){
        while(curr < k && right < s.length){
            if (s[right++] === "1") curr++
        }
        if ((right - left) < len && curr === k){
            ans = s.slice(left,right)
            len = ans.length
        }
        else if ((right - left) === len && curr === k){
            if (s.slice(left,right) < ans) ans = s.slice(left,right)
        }
        while(curr === k && left < right){
            if (s[left++] === "1") curr--
        }
        while(s[left] === "0") left++

    }

    return ans
};