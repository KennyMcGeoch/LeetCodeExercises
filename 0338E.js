/**
 * @param {number} n
 * @return {number[]}
 * Runtime: 66 ms, faster than 90.69% of JavaScript online submissions for Counting Bits.
 * Memory Usage: 50.9 MB, less than 26.53% of JavaScript online submissions for Counting Bits.
 */
var countBits = function(n) {
    
    let ans = [0,1]
    
    while(ans.length < n+1){
        let len = ans.length
        for (let i=0; i<len; i++){
            ans.push(ans[i] + 1)
        }
    }
    return ans.slice(0,n+1)
    
};