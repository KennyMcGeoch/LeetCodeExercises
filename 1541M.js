/**
 * @param {string} s
 * @return {number}
 * Runtime 8ms Beats 93.33%
 * Memory 63.02MB Beats 43.33%
 */
var minInsertions = function(s) {
    let ans = 0
    let stack = []

    for (let i=0; i<s.length; i++){
        if (s[i] === "(") stack.push(1)
        else if (stack.length){
            if (s[i+1] === ")"){
                i++
            }
            else ans++
            stack.pop()
        }
        else{
            if (s[i+1] === ")"){
                i++
            }
            else ans++
            stack.pop()
            ans++
        }
    }

    return ans + stack.length + stack.length
}

/**
 * @param {string} s
 * @return {number}
 * Runtime 7ms Beats 96.67%
 * Memory 55.85MB Beats 100.00%
 */
var minInsertions = function(s) {
    let ans = 0
    let curr = 0

    for (let i=0; i<s.length; i++){
        if (s[i] === "(") curr++
        else if (curr){
            if (s[i+1] === ")"){
                i++
            }
            else ans++
            curr--
        }
        else{
            if (s[i+1] === ")"){
                i++
            }
            else ans++
            ans++
        }
    }

    return ans + curr + curr
}