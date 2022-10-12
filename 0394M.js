/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {

    let iterations = s.length
    let multiplier = ""
    let solution = ""
    let temp = ""
    let loops = 0

    for (i=0; i<iterations; i++){
        if (s[i] !== "["){
            multiplier += s[i]
        }
        else{
            i++
            while (s[i] !== "]"){
                temp += s[i]
                i++
            }
            loops = parseInt(multiplier)
            for (j=0; j<multiplier; j++){
                solution += temp
            }
            temp = ""
            multiplier = ""
        }

    }

    console.log(solution)
    
};

decodeString("3[a]2[bc]")