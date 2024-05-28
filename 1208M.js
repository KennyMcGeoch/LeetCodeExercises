/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 * Runtime: 1294 ms, faster than 6.42% of JavaScript online submissions for Get Equal Substrings Within Budget.
 * Memory Usage: 53.2 MB, less than 16.51% of JavaScript online submissions for Get Equal Substrings Within Budget.
 */
var equalSubstring = function(s, t, maxCost) {
    
    let diff = []
    
    for (let i=0; i<s.length; i++){
        diff[i] = Math.abs(s.charCodeAt(i)-t.charCodeAt(i))
    }
    
    let ans = 0
    for (let i=0; i<diff.length; i++){
        let total = 0
        let right = i-1
        while (total <= maxCost){
            total += diff[++right]
        }
        ans = Math.max(ans, right-i)
    }
    
    return ans
    
};

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 * Runtime: 55 ms, faster than 91.74% of JavaScript online submissions for Get Equal Substrings Within Budget.
 * Memory Usage: 53.7 MB, less than 12.84% of JavaScript online submissions for Get Equal Substrings Within Budget.
 */
var equalSubstring = function(s, t, maxCost) {
    
    let diff = []
    
    for (let i=0; i<s.length; i++){
        diff[i] = Math.abs(s.charCodeAt(i)-t.charCodeAt(i))
    }
    
    let ans = 0
    let sum = 0
    let left = 0
    let right = 0
    while (right < diff.length){
        if (sum <= maxCost){
            sum += diff[right++]
        }
        else{
            ans = Math.max(ans,right-left-1)
            sum -= diff[left++]
        }
    }
    
    if (sum <= maxCost) ans = Math.max(ans,right-left)
    else ans = Math.max(ans,right-left-1)
    return ans
    
};