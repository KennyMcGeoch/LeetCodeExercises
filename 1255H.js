/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 * Runtime: 56 ms, faster than 84.62% of JavaScript online submissions for Maximum Score Words Formed by Letters.
 * Memory Usage: 51.4 MB, less than 76.92% of JavaScript online submissions for Maximum Score Words Formed by Letters.
 */
var maxScoreWords = function(words, letters, score) {
    
    let total = {}
    let ans = 0
    let chars = new Array(26).fill(0)
    
    for (let i=0; i<letters.length; i++) chars[letters[i].charCodeAt(0)-97]++
    
    for (let i=0; i<words.length; i++){
        let temp = 0
        for (let j=0; j<words[i].length; j++){
            temp += score[words[i].charCodeAt(j)-97]
        }
        total[words[i]] = temp
    }

    function recur(score, cha, ind){
        if (ind === words.length){
            ans = Math.max(ans, score)
            return
        }
        recur(score, cha, ind+1)
        let temp = [...cha]
        for (let i=0; i<words[ind].length; i++) temp[words[ind].charCodeAt(i)-97]--
        if (temp.filter((a=> a < 0)).length > 0) return
        return recur(score += total[words[ind]], temp, ind+1)
    }
    
    recur(0,chars,0)
    
    return ans
    
};