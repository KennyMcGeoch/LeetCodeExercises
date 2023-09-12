/**
 * @param {string} s
 * @return {number}
 * Runtime: 149 ms, faster than 52.38% of JavaScript online submissions for Minimum Deletions to Make Character Frequencies Unique.
 * Memory Usage: 49.8 MB, less than 26.19% of JavaScript online submissions for Minimum Deletions to Make Character Frequencies Unique.
 */
var minDeletions = function(s) {
    
    let hash = {}
    
    for (let i=0; i<s.length; i++){
        if (hash[s[i]] === undefined) hash[s[i]] = 1
        else hash[s[i]]++
    }
    
    let totals = Object.values(hash)
    totals.sort((a,b)=>a-b)
    let changes = 0
    
    for (let i=1; i<totals.length; i++){
        totals.sort((a,b)=>a-b)
        if (totals[i] === totals[i-1]){
            let dupe = true
            while (dupe){
                changes++
                let temp = totals[i]-1
                if (totals.includes(temp)){
                    totals[i]--
                }
                else if (totals[i] === 0) {
                    dupe = false
                    changes--
                }
                else {
                    dupe = false
                    totals[i]--
                }
            }
        }
    }
    
    console.log(totals)
    
    return changes
    
};