/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 * Runtime: 47 ms, faster than 91.11% of JavaScript online submissions for Custom Sort String.
 * Memory Usage: 49.9 MB, less than 41.55% of JavaScript online submissions for Custom Sort String.
 */
var customSortString = function(order, s) {
    
    let count = {}
    let remain = ""
    
    for (let i=0; i<order.length; i++) count[order[i]] = 0
    
    for (let i=0; i<s.length; i++){
        if (count[s[i]] === undefined) remain += s[i]
        else count[s[i]]++
    }
    let ans = ""
    for (let i=0; i<order.length; i++){
        while(count[order[i]]-- > 0) ans += order[i]
    }
    
    return ans + remain
    
    
    
};