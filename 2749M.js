/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.62MB Beats 77.78%
 */
var makeTheIntegerZero = function(num1, num2) {
    let ans = -1
    let curr = num1
    let val = 0

    for (let i=1; i<61; i++){
        curr = num1 - (num2 * (i))
        val = 0
        if (curr < i){ 
            return ans
            }
        while(curr){
            val += (curr % 2)
            curr = Math.floor(curr/2)
        }
        if (val <= i) return i
    }

    return ans
};