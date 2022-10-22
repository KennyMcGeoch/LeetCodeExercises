/**
 * @param {number} num
 * @return {boolean}
 * Runtime: 63 ms, faster than 95.12% of JavaScript online submissions for Valid Perfect Square.
 * Memory Usage: 42 MB, less than 53.57% of JavaScript online submissions for Valid Perfect Square.
 */
 var isPerfectSquare = function(num) {

    let min = 1
    let max = 0
    let total

    let length = num.toString().length
    let tenMult = parseInt((length-1)/2)
    let threeMult = (length-1) % 2

    for (i=0; i<tenMult; i++){
        min *= 10
    }
    if (threeMult === 1)min *= 3

    while(true){
        total = min * min
        if (total === num){
            return true
        }
        if (total > num){
            max = min
            break
        }
        min+=20        
    }
    while(max<min+20){
        total = min * min
        if (total === num){
            return true
        }
        if (total < num){
            return false
        }
        min--       
    }
     
     return false

    
};
isPerfectSquare(4627272)