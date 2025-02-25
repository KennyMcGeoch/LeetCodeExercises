/**
 * @param {number[]} arr
 * @return {number}
 * Runtime 4ms Beats100.00%
 * Memory 65.32MB Beats 14.29%
 */
var numOfSubarrays = function(arr) {
    let odd = 0
    let even = 0
    let ans = 0
    let temp = 0

    for (let i=0; i<arr.length; i++){
        if (arr[i] % 2 === 1){
            temp = odd
            odd = even + 1
            even = temp
        }
        else even++
        ans += odd
        ans %= 1000000007
    }
    return ans
};