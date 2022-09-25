/**
 * @param {number} num
 * @return {number}
 * Runtime: 114 ms, faster than 51.80% of JavaScript online submissions for Add Digits.
Memory Usage: 43.9 MB, less than 49.92% of JavaScript online submissions for Add Digits.
 */
 var addDigits = function(num) {

    while (num>9){
        num = convertArrayToNum(num);
    }


    function convertArrayToNum(num){
        return Array.from(num.toString()).map(Number).reduce(function(a, b){ return a + b; });
    }

    return num
    
};

addDigits(58)