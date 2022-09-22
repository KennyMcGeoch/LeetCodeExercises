/**
 * @param {number} x
 * @return {number}
 * Runtime: 182 ms, faster than 5.02% of JavaScript online submissions for Reverse Integer.
Memory Usage: 44.5 MB, less than 16.78% of JavaScript online submissions for Reverse Integer.
 */
 var reverse = function(x) {
    let negVal = 1
    let stringCont = ""
    let solution = ""

    if (x < 0) {
        negVal = -1;
        x *= -1
    }

    stringCont = x.toString();
    console.log(stringCont)

    for (i=stringCont.length-1; i>=0; i--){
        solution += stringCont.charAt(i)
    }

    solution = (parseInt(solution * negVal))

    if (solution > 2147483647 || solution < -2147483648) return 0

    return solution
};

reverse(-321)