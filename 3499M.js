/**
 * @param {string} s
 * @return {number}
 * Runtime 60ms Beats 100.00%
 * Memory 75.79MB Beats 7.14%
 */
var maxActiveSectionsAfterTrade = function(s) {
    let ans = 0
    let curr = "1"
    let currNum = 1
    let arr = []

    for (let i=0; i<s.length; i++){
        if (s[i] === curr) currNum++
        else{
            arr.push(currNum)
            currNum = 1
            curr = s[i]
        }
        if (s[i] === "1") ans++
    }
    arr.push(currNum)
    let max = 0
    for (let i=3; i<arr.length; i+=2) max = Math.max(max, arr[i] + arr[i-2])

    return ans + max
};

/**
 * @param {string} s
 * @return {number}
 * Runtime 54ms Beats 100.00%
 * Memory 71.28MB Beats 85.71%
 */
var maxActiveSectionsAfterTrade = function(s) {
    let ans = 0
    let prev = -1000000
    let currNum = 0
    let max = 0

    for (let i=0; i<s.length; i++){
        if (s[i] === "0") currNum++
        else if (currNum){
            max = Math.max(max,prev+currNum)
            prev = currNum
            currNum = 0
        }
        if (s[i] === "1") ans++
    }

    if (currNum) max = Math.max(max,prev+currNum)

    return ans + max
};