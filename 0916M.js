/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 * Runtime 42ms Beats 96.55%
 * Memory 65.62MB Beats 100.00%
 */
var wordSubsets = function(words1, words2) {
    let ans = []
    let comp = new Array(26).fill(0)
    let curr = new Array(26).fill(0)
    let valid = true

    for (let i=0; i<words2.length; i++){
        for (let j=0; j<words2[i].length; j++){
         curr[words2[i].charCodeAt(j)-97]++
        }
        for (let j=0; j<26; j++) comp[j] = Math.max(comp[j],curr[j])
        curr.fill(0)
    }

    for (let i=0; i<words1.length; i++){
        for (let j=0; j<words1[i].length; j++) curr[words1[i].charCodeAt(j)-97]++
        for (let j=0; j<26; j++){
            if (curr[j] < comp[j]){
                valid = false
                j = 26
            }
        }
        if (valid) ans.push(words1[i])
        else valid = true
        curr.fill(0)
    }

    return ans
};