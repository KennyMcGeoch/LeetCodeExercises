/**
 * @param {number} n
 * @return {number}
 * Runtime: 46 ms, faster than 82.81% of JavaScript online submissions for Count Numbers with Unique Digits.
 * Memory Usage: 41.4 MB, less than 87.50% of JavaScript online submissions for Count Numbers with Unique Digits.
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0)return 1
    else if (n === 1) return 10
    let sum = 10
    const mult = [9,9,8,7,6,5,4,3,2,1,0]
    let curr = 2
    while (curr <= n){
        let temp = mult[0]
        for (let i=1; i<curr; i++){
            temp *= mult[i]
        }
        sum += temp
        curr++
    }
    return sum
    
};

//const answer = [1,10,91,739,5275,32491,168571,712891,2345851]
// return answer[n]
// This oddly runs slower than above solution