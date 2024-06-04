/**
 * @param {string} s
 * @return {number}
 Runtime: 142 ms, faster than 5.74% of JavaScript online submissions for Longest Palindrome.
Memory Usage: 46.1 MB, less than 5.40% of JavaScript online submissions for Longest Palindrome.
 */
 var longestPalindrome = function(s) {
    let lengthPal = 0;
    for (i=0; i<s.length; i++){
        if (s[i] !== "1"){
            var re = new RegExp(s[i], 'g');
            let result = s.match(re);
            if (result.length % 2 !== 0){
                s = s.replace(s[i], "1")
            }
            else if (result.length > 1){
                lengthPal += result.length
                var rep = new RegExp(s[i], 'g');
                s = s.replace(rep, "1")
            }
        }   
    }
    if (lengthPal < s.length){
        lengthPal++
    }
    return lengthPal
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 52 ms, faster than 86.66% of JavaScript online submissions for Longest Palindrome.
 * Memory Usage: 50.1 MB, less than 76.44% of JavaScript online submissions for Longest Palindrome.
 */
var longestPalindrome = function(s) {
    let ans = 0
    let odd = false
    let hash = {}
    
    for (let i=0; i<s.length; i++) hash[s[i]] = (hash[s[i]] || 0) + 1
     
    for (x in hash){
        if (hash[x] % 2 === 1){
            ans -= 1
            odd = true
        }
        ans += hash[x]

    }

    return ans + odd
};

