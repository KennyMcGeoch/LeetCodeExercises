/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 * Runtime: 98 ms, faster than 33.58% of JavaScript online submissions for Assign Cookies.
 * Memory Usage: 44.7 MB, less than 73.63% of JavaScript online submissions for Assign Cookies.
 */
var findContentChildren = function(g, s) {
    
    let total = 0
    let childArr = g.length
    let cookieArr = s.length
    let i = 0
    let j = 0
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    
    while (i < childArr && j < cookieArr){
        if (g[i] <= s[j]){
            total++
            i++
        }
        j++
    }
    return total
    
};