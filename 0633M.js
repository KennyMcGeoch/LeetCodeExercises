/**
 * @param {number} c
 * @return {boolean}
 * Runtime: 102 ms, faster than 65.60% of JavaScript online submissions for Sum of Square Numbers.
 * Memory Usage: 42.5 MB, less than 37.20% of JavaScript online submissions for Sum of Square Numbers.
 */
 var judgeSquareSum = function(c) {

    let min = 0
    let max = 4
    let total

    let length = c.toString().length
    let tenMult = parseInt((length-1)/2)
    let threeMult = (length-1) % 2

    for (i=0; i<tenMult; i++){
        max *= 10
    }
    if (threeMult === 1)max *= 3

    while(min <= max){
        total = (min * min) + (max * max) 
        if (total === c)return true
        else if (total < c)min++
        else max--
    }
     
     return false
    
};