/**
 * @param {string} num
 * @param {number[]} change
 * @return {string}
 * Runtime: 79 ms, faster than 100.00% of JavaScript online submissions for Largest Number After Mutating Substring.
 * Memory Usage: 50.9 MB, less than 85.71% of JavaScript online submissions for Largest Number After Mutating Substring.
 */
var maximumNumber = function(num, change) {
    
    let ans = ""
    let first = false
    
    for (let i=0; i<num.length; i++){
        if (change[num[i]] == num[i]) ans += num[i]
        else if (change[num[i]] > num[i]){
            ans += change[num[i]]
            first = true
        }
        else{
            if (first) return ans + num.slice(i)
            ans += num[i]
        }
        
    }
    
    return ans
    
};