/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 84 ms, faster than 22.06% of JavaScript online submissions for Valid Palindrome.
 * Memory Usage: 48 MB, less than 27.96% of JavaScript online submissions for Valid Palindrome.
 */
var isPalindrome = function(s) {
    
    let data = removeChars(s)
    
    function removeChars(str){
        let sol = ""
        let loops = str.length
        for (i=0; i<loops; i++){
            let char = s.charCodeAt(i)
            if (char > 64 && char < 91) sol += str[i].toLowerCase()
            else if (char > 96 && char < 123) sol += str[i]
            else if (char > 47 && char < 58) sol += str[i]
        }
        return sol
    }
    let max = data.length - 1
    let min = 0
    console.log(data)
    while (min < max){
        if (data[min++] !== data[max--])return false
    }

    return true
    
};