/**
 * @param {string} s
 * @return {number}
 * Runtime: 427 ms, faster than 5.12% of JavaScript online submissions for Longest Palindrome.
Memory Usage: 48.4 MB, less than 5.46% of JavaScript online submissions for Longest Palindrome.
 */
 var longestPalindrome = function(s) {
    let lengthPal = 0;
    for (i=0; i<s.length; i++){
        var re = new RegExp(s[i], 'g');
        let result = s.match(re);
        if (result.length % 2 !== 0){
            s = s.replace(s[i], "1")
        }
        else if (result.length > 1){
            lengthPal ++
        }

    }
    if (lengthPal < s.length){
        lengthPal++
    }
    return lengthPal
};

longestPalindrome("dakfnaaald")