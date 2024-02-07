/**
 * @param {string} s
 * @return {string}
 * Runtime: 58 ms, faster than 96.21% of JavaScript online submissions for Sort Characters By Frequency.
 * Memory Usage: 59.5 MB, less than 7.90% of JavaScript online submissions for Sort Characters By Frequency.
 */
var frequencySort = function(s) {
    
    let hash = {}
    
    for (let i=0; i<s.length; i++){
        hash[s[i]] = (hash[s[i]] || "") + s[i]
    }
    
    return Object.values(hash).sort((a,b)=>b.length-a.length).join("")
    
};