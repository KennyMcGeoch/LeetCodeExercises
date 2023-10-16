/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * Runtime: 50 ms, faster than 75.00% of JavaScript online submissions for Calculate Digit Sum of a String.
 * Memory Usage: 42.6 MB, less than 28.75% of JavaScript online submissions for Calculate Digit Sum of a String.
 */
var digitSum = function(s, k) {
    
    while (s.length > k){
        let arr = s.split("").map((a) => Number(a))
        s = ""
        let sum = 0
        for (let i=0; i<arr.length; i++){
            if (i % k === 0 && i>0){
                s += sum
                sum = 0
            }
            sum += arr[i]            
        }
        s += sum
    }
    return s
    
};