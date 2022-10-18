/**
 * @param {string[]} words
 * @return {number}
 * Runtime: 393 ms, faster than 49.55% of JavaScript online submissions for Longest Palindrome by Concatenating Two Letter Words.
 * Memory Usage: 58.8 MB, less than 59.21% of JavaScript online submissions for Longest Palindrome by Concatenating Two Letter Words.
 */
 var longestPalindrome = function(words) {

    let iterations = words.length
    let count = 0
    let wordStore = {}
    let duplicate = 0

    for (i=0; i<iterations; i++){
        if (words[i][0] === words[i][1]){
            if (wordStore[words[i]] === undefined){
            wordStore[words[i]] = 1
                duplicate++
            }
            else if (wordStore[words[i]] > 0){
            wordStore[words[i]]--
            count += 4
            duplicate--
            }
            else {
            wordStore[words[i]]++
            duplicate++
            }
        }
        else if (wordStore[words[i]] === undefined){
            tempVal = words[i][1] + words[i][0]
            if (wordStore[tempVal] === undefined){
                wordStore[tempVal] = 1                
            }
            else{
                wordStore[tempVal]++                
            }
        }
        else if (wordStore[words[i]] > 0){
            wordStore[words[i]]--
            count += 4
        }
        else if (wordStore[words[i]] === 0){
            tempVal = words[i][1] + words[i][0]
            if (wordStore[tempVal] === undefined){
                wordStore[tempVal] = 1                
            }
            else{
                wordStore[tempVal]++                
            }
        }
        else{
            tempVal = words[i][1] + words[i][0]
            wordStore[tempVal] = 1
        }

    }
     
     if (duplicate > 0) count += 2
     
    return count    
};