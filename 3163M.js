/**
 * @param {string} word
 * @return {string}
 * Runtime: 38 ms, faster than 25.00% of JavaScript online submissions for String Compression III.
 * Memory Usage: 64.6 MB, less than 20.00% of JavaScript online submissions for String Compression III.
 */
var compressedString = function(word) {
    let ans = ""
    let count = 0
    
    for (let i=0; i<=word.length; i++){
        if (count){
            if (word[i] !== word[i-1]){
                while (count > 9){
                    ans = ans + "9" + word[i-1]
                    count -= 9
                }
                if (count) ans = ans + count + word[i-1]
                count = 0
            }
        }
        count++
    }
    return ans
};

/**
 * @param {string} word
 * @return {string}
 * Runtime: 38 ms, faster than 25.00% of JavaScript online submissions for String Compression III.
 * Memory Usage: 64 MB, less than 54.29% of JavaScript online submissions for String Compression III.
 */
var compressedString = function(word) {
    let ans = ""
    let count = 1
    
    for (let i=1; i<=word.length; i++){
        if (word[i] !== word[i-1]){
            while (count > 9){
                ans = ans + "9" + word[i-1]
                count -= 9
            }
            if (count) ans = ans + count + word[i-1]
            count = 0
        }
        count++
    }
    return ans
};