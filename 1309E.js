/**
 * @param {string} s
 * @return {string}
 * Runtime: 67 ms, faster than 88.98% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
 * Memory Usage: 42.1 MB, less than 70.62% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
 */
 var freqAlphabets = function(s) {

    let sArray = s.split("")
    let convertedArray = []
    let iterations = s.length
    let count = 0

    for (i=0; i<iterations; i++){
        if (sArray[i+2] === "#"){
            convertedArray[count++] = String.fromCharCode(parseInt(sArray[i]+ sArray[i+1])+96)
            i += 2
        }
        else{
            convertedArray[count++] = String.fromCharCode(parseInt(sArray[i])+96)
        }
    }
    return convertedArray.join("")

};

freqAlphabets("10#11#12")