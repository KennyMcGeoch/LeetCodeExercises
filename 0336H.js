/**
 * @param {string[]} words
 * @return {number[][]}
 * Code works but is too slow so needs algorithm optimisations
 */

var palindromePairs = function(words) {
    let solutions = [];
    let totalWords = words.length;
    let testString = "";
    let reverseString = ""

    for (i=0; i<totalWords; i++){
        for (j=0; j<totalWords; j++){
            iSize = new Set(words[i]).size
            jSize = new Set(words[j]).size
            if(i !== j){
                if (words[i] === "" || words[j] === ""){
                    if (checkString(words[i]+words[j]) === true){
                        solutions.push([i,j])
                    }

                }
                else if (iSize === 1 && jSize === 1 && words[i][0] === words[j][0]){
                    solutions.push([i,j])
                }
                else if(words[i][0] === words[j][words[j].length-1]){
                    reverseString = words[j].split("").reverse().join("");

                    if (words[i].length >= words[j].length){
                        if (words[i].slice(0,words[j].length) === reverseString){
                            testString = words[i].slice(words[j].length)
                            if (checkString(testString) === true){
                                solutions.push([i,j])
                            }
                        }

                    }
                    else if (words[j].length >= words[i].length){
                        if (words[i] === reverseString.slice(0,words[i].length)){
                            testString = words[j].slice(0,(words[j].length - words[i].length))
                            if (checkString(testString) === true){
                                solutions.push([i,j])
                            }
                        }
                    }
                    }
                    else{
                        if(checkString(words[i]+words[j])){
                            solutions.push([i,j])
                        }
                }
           }
        }
    }

    function checkString(test){
        if (test.length < 2){
            return true
        }
        let testLength = test.length - 1
        let k=0
        while (k < testLength){
            if (test[k++] !== test[testLength--]){
                return false
            }

        }
        return true

    }
    console.log(solutions)
        
    };
    

palindromePairs(["lls","s"])
