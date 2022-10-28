/**
 * @param {string} s
 * @return {string}
 * Runtime: 234 ms, faster than 17.67% of JavaScript online submissions for Reverse Vowels of a String.
 * Memory Usage: 49.7 MB, less than 43.76% of JavaScript online submissions for Reverse Vowels of a String.
 */
 var reverseVowels = function(s) {

    let vowels = []
    let iterations = s.length
    solution = ""

    for (i=0; i<iterations; i++){
        if (isAVowel(s[i])){
            vowels.unshift(s[i])
        }
    }

    for (i=0; i<iterations; i++){
        if (isAVowel(s[i])){
            solution += vowels[0]
            vowels.shift()
        }
        else{
            solution += s[i]
        }
    }

    function isAVowel(str){
        switch(str){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                return true
            default: return false
        }
    }
    return solution
    
};

reverseVowels("hello")