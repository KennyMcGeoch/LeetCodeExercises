/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 * Runtime: 752 ms, faster than 14.73% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
 * Memory Usage: 53.9 MB, less than 27.13% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
 */
 var countCharacters = function(words, chars) {

    let solution = 0
    let target = 0
    let iterations = chars.length
    chars = [...chars].sort((a, b) => a.localeCompare(b)).join("")

    for (i=0; i<words.length; i++){
        if (checkValid(words[i])) solution += target
    }


    function checkValid(str){
        target = str.length
        str = [...str].sort((a, b) => a.localeCompare(b)).join("")
        let k = 0
        for (j=0; j<iterations; j++){
            if (str[k] === chars[j]){
                k++
                if (k === target)return true
            }
        }
        return false
    }

    return solution
    
};