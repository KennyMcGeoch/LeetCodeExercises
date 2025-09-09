/**
 * @param {number} n
 * @return {number[]}
 * Runtime 0ms Beats 100.00%
 * Memory 54.48MB Beats 24.64%
 */
var getNoZeroIntegers = function(n) {
    let num = 0
    let temp = n
    let mult = 1

    while(temp > 9 || num === 0){
        if (temp % 10 > 1){
            temp--
            num += mult
        }
        else{
            temp -= 10
            num += (mult * 5)
        }
        temp = Math.floor(temp/10)
        mult *= 10
    }

    return [num,n-num]
};