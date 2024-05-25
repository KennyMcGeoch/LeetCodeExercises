/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 * Runtime: 42 ms, faster than 94.55% of JavaScript online submissions for Word Break II.
 * Memory Usage: 48.7 MB, less than 70.05% of JavaScript online submissions for Word Break II.
 */
var wordBreak = function(s, wordDict) {
    
    let dict = {}
    let ans = []
    
    for (let i=0; i<wordDict.length; i++){
        let node = dict
        for (let j=0; j<wordDict[i].length; j++){
            if (node[wordDict[i][j]] === undefined) node[wordDict[i][j]] = {}
            node = node[wordDict[i][j]]
        }
        node["end"] = true        
    }
    
    
    function recur(str, ind, arr){
        if (ind === s.length && str === "") ans.push(arr.join(" "))
        let node = dict
        while(ind <= s.length){
            if (node.end !== undefined){
                recur("", ind, [...arr, str])
            }
            if (node[s[ind]] === undefined) return
            node = node[s[ind]]
            str += s[ind++]
        }
        return
    }
    recur("", 0, [])
    
    return ans
    
};