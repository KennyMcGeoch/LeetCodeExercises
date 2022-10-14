/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 513 ms, faster than 5.01% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 49.8 MB, less than 5.12% of JavaScript online submissions for Valid Parentheses.
 */
 var isValid = function(s) {

    let parenth = [0,0,0]
    let firstVar = ""
    let firstVarLoc = 0
    let firstVarArr = 0
    let solution = removeInner(s)

    while (solution.length > 1){
        solution = removeInner(solution)
    }

    function removeInner(str){

        if (str.charCodeAt(0) === 40){
            firstVar = "("
            firstVarArr = 0
        } 
        else if (str.charCodeAt(0) === 91){
            firstVar = "["
            firstVarArr = 1
        }  
        else if (str.charCodeAt(0) === 123){
            firstVar = "{"
            firstVarArr = 2
        }  
        else return "1"
        
        for (i=0; i<str.length; i++){
            if (str[i] === firstVar){
                firstVarLoc = i
                parenth = [0,0,0]
            }
            if (str.charCodeAt(i) === 40) parenth[0]++
            else if (str.charCodeAt(i) === 41){
                parenth[0]--
                if (parenth[0] < 0) return false
            } 
            else if (str.charCodeAt(i) === 91) parenth[1]++
            else if (str.charCodeAt(i) === 93) {
                parenth[1]--
                if (parenth[1] < 0) return false
            } 
            else if (str.charCodeAt(i) === 123) parenth[2]++
            else if (str.charCodeAt(i) === 125) {
                parenth[2]--
                if (parenth[2] < 0) return false
            }

            if (parenth[firstVarArr] === 0){
                if (Math.max(parenth[0],parenth[1],parenth[2]) === 0){
                    return str.slice(0,firstVarLoc) + str.slice(firstVarLoc+1,i)+str.slice(i+1)
                }
                
                else {
                    return "1"
                }
            }
    
        }
        return "1"

    }

    

    if (solution === "")return true


    return false    
};