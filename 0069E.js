const { start } = require("repl");

/**
 * @param {number} x
 * @return {number}
 * Runtime: 170 ms, faster than 16.96% of JavaScript online submissions for Sqrt(x).
Memory Usage: 44 MB, less than 35.59% of JavaScript online submissions for Sqrt(x).
 */
 var mySqrt = function(x) {
     
    if (x < 2){
        return x
    }
    
    let lengthOfNum = x.toString().length
    let startNum = 1;
        for (i=1; i<lengthOfNum; i++){
            startNum *= 3.16
            
        }
    let numMult = x.toString()[0]
        if (parseInt(numMult) > 4){
            startNum *= 2
        }
        startNum = parseInt(startNum)
        for (i=startNum; i< x; i++){
            if(i*i === x){
                return i
            }
            else if (i*i > x){
                return i-1
            }
        }
     return 1
};

mySqrt(183692038
    )
