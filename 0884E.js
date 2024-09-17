/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 * Runtime: 49 ms, faster than 80.78% of JavaScript online submissions for Uncommon Words from Two Sentences.
 * Memory Usage: 49.3 MB, less than 56.08% of JavaScript online submissions for Uncommon Words from Two Sentences.
 */
var uncommonFromSentences = function(s1, s2) {
    
    let hash = {}
    let hashTwo = {}
    let ans = []
    
    s1 = s1.split(" ")
    s2 = s2.split(" ")
    
    for (let i=0; i<s1.length; i++){
        if (hash[s1[i]] === undefined) hash[s1[i]] = true
        else hash[s1[i]] = false
    }
    for (let i=0; i<s2.length; i++){
        if (hashTwo[s2[i]] === undefined) hashTwo[s2[i]] = true
        else hashTwo[s2[i]] = false
    }
    for (x in hash){
        if (hash[x] && hashTwo[x] === undefined)ans.push(x)
    }
    for (x in hashTwo){
        if (hash[x] === undefined && hashTwo[x])ans.push(x)
    }
    
    return ans
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 * Runtime: 51 ms, faster than 72.16% of JavaScript online submissions for Uncommon Words from Two Sentences.
 * Memory Usage: 49.4 MB, less than 48.63% of JavaScript online submissions for Uncommon Words from Two Sentences.
 */
var uncommonFromSentences = function(s1, s2) {
    
    let hash = {}
    let ans = []
    
    s1 = s1.split(" ")
    s2 = s2.split(" ")
    
    for (let i=0; i<s1.length; i++) hash[s1[i]] = (hash[s1[i]] || 0) + 1
    for (let i=0; i<s2.length; i++) hash[s2[i]] = (hash[s2[i]] || 0) + 1

    for (x in hash){
       if (hash[x] === 1) ans.push(x)
    }
    
    return ans
};