/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.30MB Beats 93.62%
 */
var maxProduct = function(n) {
    let max = 0
    let maxTwo = 0

    while(n){
        if (n % 10 > max){
            maxTwo = max
            max = n % 10
        }
        else if (n % 10 > maxTwo){
            maxTwo = n % 10
        }
        n =  Math.floor(n/10)
    }

    return max * maxTwo
};