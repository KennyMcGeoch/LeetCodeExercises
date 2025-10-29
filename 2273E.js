/**
 * @param {string[]} words
 * @return {string[]}
 * Runtime 6ms Beats 87.04%
 * Memory 61.71MB Beats 32.41%
 */
var removeAnagrams = function(words) {
    let curr = words[0].split("").sort().join("")
    let temp = ""
    for (let i=1; i<words.length; i++){
        temp = words[i].split("").sort().join("")
        if (temp === curr) words[i] = ""
        else curr = temp
    }
    return words.filter((a)=> a !== "")
};