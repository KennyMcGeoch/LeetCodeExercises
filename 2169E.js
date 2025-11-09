/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.70MB Beats 84.62%
 */
var countOperations = function(num1, num2) {
    if (num1 === 0 || num2 === 0) return 0
    if (num1 === num2) return 1
    let ans = 0
    elim(Math.min(num1,num2),Math.max(num1,num2))

    function elim(min, max){
        while (min && max){
            ans += Math.floor(max/min)
            max %= min
            if (max){
                ans += Math.floor(min/max)
                min %= max
            }
        }
    }

    return ans

};