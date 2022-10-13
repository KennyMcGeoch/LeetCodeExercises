/**
 * @param {string} s
 * @return {string}
 * Runtime: 87 ms, faster than 62.80% of JavaScript online submissions for Decode String.
 * Memory Usage: 42.1 MB, less than 33.04% of JavaScript online submissions for Decode String.
 */
 var decodeString = function(s) {

    let multiplier = ""
    let temp = ""
    let solution = ""
    let firstChar = -1
    let lastChar = -1
    let recSol
    
    if (s.includes("[") === false)return s

        recSol = singleDecode(s)

        while(recSol.includes("[")){
            temp = ""
            solution = ""
            firstChar = -1
            recSol = singleDecode(recSol)
        }

    function singleDecode(str){
        for (i=0; i<str.length; i++){
            if (isCharNumber(str[i])){
                if (firstChar === -1){
                    firstChar = i
                }
                multiplier += str[i]
            }
            else if (str[i] === "["){
                i++
                while(isCharNumber(str[i]) === false){
                    if (str[i] === "]"){
                        lastChar = i
                        for (j=0; j<parseInt(multiplier); j++){
                            solution += temp
                        }
                        multiplier = ""
                        return str.slice(0,firstChar) + solution + str.slice(lastChar+1)
                    }
                    else{
                        temp += str[i]
                    }
                    i++
                }
                temp = ""
                multiplier = ""
                i--
                firstChar = -1
            }
        }
    }   
    return recSol  
};

function isCharNumber(c) {
    return c >= '0' && c <= '9';
}

decodeString("3[a]2[bc]")
// decodeString("3[a2[c]]")
// decodeString("3[acc]")
// decodeString("a2[c]a2[c]a2[c]")