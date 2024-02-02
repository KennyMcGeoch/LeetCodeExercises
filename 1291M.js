/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 * Runtime: 37 ms, faster than 100.00% of JavaScript online submissions for Sequential Digits.
 * Memory Usage: 48.6 MB, less than 10.00% of JavaScript online submissions for Sequential Digits.
 */
var sequentialDigits = function(low, high) {
    
    let seq = []
    
    for (let i=1; i<9; i++){
        let total = i
        for (let j=i+1; j<10; j++){
            total *= 10
            total += j
            seq.push(total)
            
        }
    }
    seq.sort((a,b)=>a-b)
    
    function memoized(min, max){
        let ans = []
        
        for (let i=0; i<seq.length; i++){
            if (seq[i] > min){
                if (seq[i] < max) ans.push(seq[i])
                else return ans
            }
        }
        return ans
        
    }
    
    return memoized(low-1, high+1)
    
};