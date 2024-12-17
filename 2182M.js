/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 * Runtime: 59 ms, faster than 76.92% of JavaScript online submissions for Construct String With Repeat Limit.
 * Memory Usage: 64.1 MB, less than 69.23% of JavaScript online submissions for Construct String With Repeat Limit.
 */
var repeatLimitedString = function(s, repeatLimit) {
    let arr = new Array(26).fill(0)
    let right = 25
    let ans = ""
    
    for (let i=0; i<s.length; i++) arr[s.charCodeAt(i)-97]++

    rightInd()
    
    function rightInd(){
        while(arr[right] === 0 && right > -1) right--
        if (arr[right] <= repeatLimit){
            for (let j=0; j<arr[right]; j++) ans += String.fromCharCode(right + 97)
            arr[right] = 0
            return rightInd()
        }
        else if (arr[right] > repeatLimit){
            for (let j=0; j<repeatLimit; j++) ans += String.fromCharCode(right + 97)
            arr[right] -= repeatLimit
            return leftInd()
        }
        else return
    }
    
    function leftInd(){
        let left = right-1
        while(arr[left] === 0 && left > -1) left--
        if (arr[left]){
            ans += String.fromCharCode(left + 97)
            arr[left]--
            return rightInd()
        }
        return        
    }
    
    return ans
};