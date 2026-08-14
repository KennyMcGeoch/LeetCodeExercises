/**
 * @param {string} s
 * @return {number}
 * Runtime 3ms Beats 67.09%
 * Memory 55.19MB Beats 93.67%
 */
var maximumLengthSubstring = function(s) {
    let arr = new Array(26).fill(0)
    let ans = 0
    let left = 0
    let right = 0

    while(right < s.length){
        while(arr[s.charCodeAt(right)-97] < 2){
            arr[s.charCodeAt(right++)-97]++
        }
        ans = Math.max(ans, right-left)
        arr[s.charCodeAt(right)-97]++
        right++
        while(arr[s.charCodeAt(left)-97] < 3 && left < right){
            arr[s.charCodeAt(left++)-97]--
        }
        arr[s.charCodeAt(left)-97]--
        left++
    }

    return ans
};

/**
 * @param {string} s
 * @return {number}
 * Runtime 1ms Beats 97.47%
 * Memory 56.09MB Beats59.49%
 */
var maximumLengthSubstring = function(s) {
    let arr = new Array(26).fill(0)
    let ans = 0
    let left = 0
    let right = 0

    while(right < s.length){
        while(arr[s.charCodeAt(right++)-97]++ < 2){}          
        ans = Math.max(ans, right-left-1)
        while(arr[s.charCodeAt(left++)-97]-- < 3 && left < right){}
    }

    return ans
};