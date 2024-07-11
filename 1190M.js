/**
 * @param {string} s
 * @return {string}
 * Runtime: 61 ms, faster than 33.33% of JavaScript online submissions for Reverse Substrings Between Each Pair of Parentheses.
 * Memory Usage: 52.5 MB, less than 9.26% of JavaScript online submissions for Reverse Substrings Between Each Pair of Parentheses.
 */
var reverseParentheses = function(s) {
    
    let count = 0
    for (let i=0; i<s.length; i++) if (s[i] === "(") count++
    
    for (let j=0; j<count; j++){
        let left = 0
        for (let i=0; i<s.length; i++){
            if (s[i] === "(") left = i
            else if (s[i] === ")"){
                s = s.slice(0, left) + convert(left+1,i) + s.slice(i+1)
                i = s.length
            }
        }
    }
        
    
    function convert(start,end){
        let ans = s.slice(start,end).split("").reverse()
        return ans.join("")
    }
    
    return s
};

/**
 * @param {string} s
 * @return {string}
 * Runtime: 52 ms, faster than 79.63% of JavaScript online submissions for Reverse Substrings Between Each Pair of Parentheses.
 * Memory Usage: 51.7 MB, less than 16.67% of JavaScript online submissions for Reverse Substrings Between Each Pair of Parentheses.
 */
var reverseParentheses = function(s) {
    
    let left = []
    let pair = []
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "(") left.push(i)
        else if (s[i] === ")") pair.push([left.pop(),i])
    }
    
    for (let i=0; i<pair.length; i++){
        s = s.slice(0, pair[i][0]) + convert(pair[i][0],pair[i][1]) + s.slice(pair[i][1])
    }
        
    
    function convert(start,end){
        let ans = s.slice(start,end).split("").reverse()
        return ans.join("")
    }
    
    return s.split("").filter((a)=> a !== "(" && a !== ")").join("")
};