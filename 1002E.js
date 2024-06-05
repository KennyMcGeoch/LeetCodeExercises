/**
 * @param {string[]} words
 * @return {string[]}
 * Runtime: 106 ms, faster than 11.81% of JavaScript online submissions for Find Common Characters.
 * Memory Usage: 61 MB, less than 5.22% of JavaScript online submissions for Find Common Characters.
 */
var commonChars = function(words) {
    
    let hash = {}
    
    for (let i=0; i<words[0].length; i++) hash[words[0][i]] = (hash[words[0][i]] || 0) + 1
    
    for (let i=1; i<words.length; i++){
        let hashTwo = {}
        for (let j=0; j<words[i].length; j++) hashTwo[words[i][j]] = (hashTwo[words[i][j]] || 0) + 1
        
        for (x in hash){
            hash[x] = Math.min(hash[x], hashTwo[x] || 0)
        }
    }
    let ans = []
    for (x in hash){
        while (hash[x]-- > 0) ans.push(x)
    }
    
    return ans
    
};

/**
 * @param {string[]} words
 * @return {string[]}
 * Runtime: 84 ms, faster than 25.00% of JavaScript online submissions for Find Common Characters.
 * Memory Usage: 54.9 MB, less than 38.46% of JavaScript online submissions for Find Common Characters.
 */
var commonChars = function(words) {
    
    let hash = {}
    
    for (let i=0; i<words[0].length; i++) hash[words[0][i]] = (hash[words[0][i]] || 0) + 1
    
    for (let i=1; i<words.length; i++){
        let hashTwo = {}
        for (let j=0; j<words[i].length; j++){
            if (hash[words[i][j]] === undefined) continue
            hashTwo[words[i][j]] = (hashTwo[words[i][j]] || 0) + 1
        }
        
        for (x in hash){
            hash[x] = Math.min(hash[x], hashTwo[x] || 0)
            if (hash[x] === 0) delete hash[x]
        }
    }
    let ans = []
    for (x in hash){
        while (hash[x]-- > 0) ans.push(x)
    }
    
    return ans
    
};