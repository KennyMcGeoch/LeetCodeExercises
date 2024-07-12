/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 * Runtime: 84 ms, faster than 99.12% of JavaScript online submissions for Count Symmetric Integers.
 * Memory Usage: 54.5 MB, less than 59.65% of JavaScript online submissions for Count Symmetric Integers.
 */
let total = [[0,0],[11,1],[22,2],[33,3],[44,4],[55,5],[66,6],[77,7],[88,8],[99,9]]
    let count = 0
    for (let i=1000; i<10000; i++){
        let str = i.toString()
        if (Number(str[0]) + Number(str[1]) === Number(str[2]) + Number(str[3])){
            total.push([i,++count])
        }
    }
    total.push([10001],count)

var countSymmetricIntegers = function(low, high) {
    
    low--
    
    let lowInd = 0
    while(total[lowInd][0] <= low) lowInd++
    let highInd = lowInd
    while(total[highInd][0] <= high) highInd++
    
    return highInd-lowInd
    
};