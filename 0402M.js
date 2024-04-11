/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * Runtime: 63 ms, faster than 74.26% of JavaScript online submissions for Remove K Digits.
 * Memory Usage: 54.3 MB, less than 89.77% of JavaScript online submissions for Remove K Digits.
 */
var removeKdigits = function(num, k) {
    
    if (k === num.length) return "0"
    let ans = []
    
    for (let i=0; i<num.length; i++){
        while(num[i] < ans[ans.length-1]){
            ans.pop()
            if (--k === 0){
                let temp = ans.join("") + num.slice(i)
                if (temp == 0) return "0"
                let zeros = 0
                while(temp[zeros] === "0") zeros++
                return temp.slice(zeros)
            }
        }
        ans.push(num[i])
    }
    
    while(k-- > 0)ans.pop()
    
    let temp = ans.join("")
    if (temp == 0) return "0"
    let zeros = 0
    while(temp[zeros] === "0") zeros++
    return temp.slice(zeros)
    
};