/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 * Runtime 26ms Beats 63.41%
 * Memory 66.67MB Beats 68.29%
 */
var spellchecker = function(wordlist, queries) {
    let match = new Set(wordlist)
    let matchCase = {}
    let matchVowel = {}
    let vowel = ["a","e","i","o","u"]
    let temp  =""
    let curr = ""
    let ans = []

    for (let i=0; i<wordlist.length; i++){
        curr = wordlist[i].toLowerCase()
        temp = ""
        if (matchCase[curr] === undefined) matchCase[curr] = i
        for (let j=0; j<curr.length; j++){
            if (vowel.includes(curr[j])) temp += "*"
            else temp += curr[j]
        }
        if (matchVowel[temp] === undefined) matchVowel[temp] = i
    }

    for (let i=0; i<queries.length; i++){
        if (match.has(queries[i])) ans.push(queries[i])
        else if (matchCase[queries[i].toLowerCase()] !== undefined) ans.push(wordlist[matchCase[queries[i].toLowerCase()]])
        else{
            temp = ""
            for (let j=0; j<queries[i].length; j++){
                if (vowel.includes(queries[i][j].toLowerCase())) temp += "*"
                else temp += queries[i][j].toLowerCase()
            }
            if (matchVowel[temp] !== undefined) ans.push(wordlist[matchVowel[temp]])
            else ans.push("")
        }
    }
    return ans
};