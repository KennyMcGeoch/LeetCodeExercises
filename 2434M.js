/**
 * @param {string} s
 * @return {string}
 * Runtime 54ms Beats 100.00%
 * Memory 75.17MB Beats 100.00%
 */
var robotWithString = function(s) {
    let ans = ""
    let stack = []
    let arr = new Array(26).fill(0)

    for (let i=0; i<s.length; i++) arr[s.charCodeAt(i)-97]++

    let min = 0
    while (arr[min] === 0) min++

    for (let i=0; i<s.length; i++){
        if (stack.length){
            if (stack[stack.length-1].charCodeAt(0)-97 > min){
                arr[s.charCodeAt(i)-97]--
                stack.push(s[i])
                while (arr[min] === 0) min++
            }
            else{
                ans += stack.pop()
                i--
            }
        }
        else{
            arr[s.charCodeAt(i)-97]--
            stack.push(s[i])
            while (arr[min] === 0) min++
        }
    }

    while (stack.length) ans += stack.pop()

    return ans
};