/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.99MB Beats 82.61%
 */
var smallestNumber = function(n, t) {
    let temp = 0
    while(n){
        if (check(n)) return n
        else n++
    }
    
    function check(num){
        temp = 1
        while(num){
            temp *= (num%10)
            num = Math.floor(num/10)
        }
        return (temp % t) === 0
    }
};