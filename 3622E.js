/**
 * @param {number} n
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 53.09MB Beats 97.73%
 */
var checkDivisibility = function(n) {
    let mult = 1
    let add = 0
    let num = n

    while(num){
        add += num%10
        mult *= num%10
        num = Math.floor(num/10)
    }

    return n % (add+mult) === 0
};