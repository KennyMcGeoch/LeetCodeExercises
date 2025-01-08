/**
 * @param {string[]} words
 * @return {number}
 * Runtime 3ms Beats 60.64%
 * Memory 50.22MB Beats 94.68%

 */
var countPrefixSuffixPairs = function(words) {
    let ans = 0

    for (let i=0; i<words.length; i++){
        for (let j=i+1; j<words.length; j++){
            if (words[i] === words[j].slice(0,words[i].length) && words[i] === words[j].slice(words[j].length - words[i].length)) ans++
        }
    }

    return ans
};