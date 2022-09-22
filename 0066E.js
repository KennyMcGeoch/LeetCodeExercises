/**
 * @param {number[]} digits
 * @return {number[]}
 * Runtime: 52 ms, faster than 99.58% of JavaScript online submissions for Plus One.
Memory Usage: 42.4 MB, less than 16.09% of JavaScript online submissions for Plus One.
 */
 var plusOne = function(digits) {

    let iterations = digits.length-1

    while (iterations >= 0){
        digits[iterations]++
        if(digits[iterations] === 10 && iterations > 0){
            digits[iterations] = 0;
            iterations--
        }
        else if (digits[iterations] === 10 && iterations < 1){
            digits[iterations] = 0;
            digits.unshift(1)
            iterations = -1
        }
        else{
            iterations = -1
        }
    }

    return digits
    
};

plusOne([2,3,4,5,9,9])