/**
 * @param {number} num
 * @return {string}
 * Runtime: 242 ms, faster than 30.80% of JavaScript online submissions for Integer to Roman.
 * Memory Usage: 46.6 MB, less than 94.19% of JavaScript online submissions for Integer to Roman.
 */
 var intToRoman = function(num) {

    let solution = ""

    while (num > 999){
        solution += "M"
        num -= 1000
    }
    if (num > 899){
        solution += "CM"
        num -= 900
    }
    else if (num > 499){
        solution += "D"
        num -= 500
    }
    else if (num > 399){
        solution += "CD"
        num -= 400
    }
    while (num > 99){
        solution += "C"
        num -= 100
    }
    if (num > 89){
        solution += "XC"
        num -= 90
    }
    else if (num > 49){
        solution += "L"
        num -= 50
    }
    else if (num > 39){
        solution += "XL"
        num -= 40
    }
    while (num > 9){
        solution += "X"
        num -= 10
    }
    if (num === 9){
        solution += "IX"
        num = 0
    }
    if  (num > 4){
        solution += "V"
        num -= 5
    }
    else if (num === 4){
        solution += "IV"
        num = 0
    }
    while (num > 0){
        solution += "I"
        num--
    }

    return solution
    
};

intToRoman(2400)