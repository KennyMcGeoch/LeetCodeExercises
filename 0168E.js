/**
 * @param {number} columnNumber
 * @return {string}
 * Runtime: 104 ms, faster than 16.15% of JavaScript online submissions for Excel Sheet Column Title.
Memory Usage: 41.8 MB, less than 58.59% of JavaScript online submissions for Excel Sheet Column Title.
 */
 var convertToTitle = function(columnNumber) {
    let remainder = columnNumber
    let answer = ""
    let stringConvert = ""
    let count = 1
    
    if (columnNumber === 27){
        return "AA"
    }

    while (remainder > 27){
        remainder /= 26
        count++
    }

    for (i=0; i<count; i++){
        stringConvert = parseInt(remainder + 0.0005);
        remainder = (remainder - parseInt(remainder))
        if (remainder === 0 && i+1 !== count){
            stringConvert--
            remainder++
        }
        stringConvert = (stringConvert % 27 + 64).toString(); 
        answer += String.fromCharCode(stringConvert)
        remainder *= 26

    }
        
    return answer
    
};

convertToTitle(702)


// 64 + char