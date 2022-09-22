/**
 * @param {string} s
 * @return {number}
 * Runtime: 165 ms, faster than 10.37% of JavaScript online submissions for String to Integer (atoi).
Memory Usage: 45.4 MB, less than 24.06% of JavaScript online submissions for String to Integer (atoi).
 */
 var myAtoi = function(s) {
    let solution = ""
    let iterations = s.length
    for (i=0; i<iterations; i++){
        if (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58){
            solution += s.charAt(i)
        }
        else if (s.charCodeAt(i) === 43 || s.charCodeAt(i) === 45){
            solution += s.charAt(i)
        }
        else if (s.charCodeAt(i) === 32 && solution.length === 0){}
        else {
            break;
        }
    }
    solution = calcSolution(solution)

    function calcSolution(solution){
        if (solution === ""){
            return 0
        }
    
        solution = parseInt(solution)

        if (isNaN(solution)){
            solution = 0
        }

    
        if (solution > 2147483647) {
            solution = 2147483647            
        }
        else if (solution < -2147483648){
            solution = -2147483648
        }
        return solution    
    }
    return solution 
};

myAtoi("+-12")