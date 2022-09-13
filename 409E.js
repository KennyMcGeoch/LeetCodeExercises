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

longestPalindrome("dakfnaaaald")