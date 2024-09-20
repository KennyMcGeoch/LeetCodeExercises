/**
 * @param {string} s
 * @return {string}
 * Runtime: 384 ms, faster than 13.86% of JavaScript online submissions for Shortest Palindrome.
 * Memory Usage: 52.8 MB, less than 87.13% of JavaScript online submissions for Shortest Palindrome.
 */
var shortestPalindrome = function(s) {
    
    if (s.length < 2) return s
    let middle = Math.floor((s.length-1)/2)
    
    function check(start,end){
        while(start > -1){
            if (s[start--] !== s[end++]) return -1            
        }
        return end-1
    }
    
    while(middle > -1){
        if (check(middle,middle+1) !== -1){
            return startStr(check(middle,middle+1)) + s
        }
        if (check(middle,middle) !== -1){
            return startStr(check(middle,middle)) + s
        }
        middle--
    }
    
    function startStr(num){
        let str = s.slice(num+1)
        str = str.split("").reverse().join("")
        return str
        
    }
};

/**
 * @param {string} s
 * @return {string}
 * Runtime: 382 ms, faster than 13.86% of JavaScript online submissions for Shortest Palindrome.
 * Memory Usage: 53.1 MB, less than 73.27% of JavaScript online submissions for Shortest Palindrome.
 */
var shortestPalindrome = function(s) {
    
    if (s.length < 2) return s
    let middle = Math.floor((s.length-1)/2)
    
    function check(start,end){
        while(start > -1){
            if (s[start--] !== s[end++]) return -1            
        }
        return end-1
    }
    
    while(middle > -1){
        let temp = check(middle,middle+1)
        if (temp !== -1){
            return startStr(temp) + s
        }
        temp = check(middle,middle)
        if (temp !== -1){
            return startStr(temp) + s
        }
        middle--
    }
    
    function startStr(num){
        let str = s.slice(num+1)
        str = str.split("").reverse().join("")
        return str
        
    }
};