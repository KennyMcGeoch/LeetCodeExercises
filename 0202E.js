/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 86 ms, faster than 76.82% of JavaScript online submissions for Happy Number.
 * Memory Usage: 44.2 MB, less than 43.08% of JavaScript online submissions for Happy Number.
 */
 var isHappy = function(n) {

    let calcNum = []
    let result = n
    let resultStore = {}

    while (1 === 1){

        calcNum = Array.from(result.toString()).map(Number)
        result = calcNum.reduce((a, num) => a + (num ** 2), 0)

        if (result === 1 || result === 7){
            return true
        }
        if (resultStore[result] !== undefined){
            return false
        }
        resultStore[result] = true
    }
    
};

isHappy(78)