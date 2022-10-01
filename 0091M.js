/**
 * @param {string} s
 * @return {number}
 * Runtime: 114 ms, faster than 35.37% of JavaScript online submissions for Decode Ways.
 * Memory Usage: 43.1 MB, less than 31.90% of JavaScript online submissions for Decode Ways.
 */
 var numDecodings = function(s) {

    let iterations = s.length
    let sArray = s.split("")
    let path = [1]

    if (sArray[0] === "0"){
        return 0
    }

    for (i=1; i<iterations; i++){
        if (sArray[i-1] !== "1" && sArray[i-1] !== "2" && sArray[i] === "0"){
            return 0
        }
        else if (sArray[i] === "0" && i > 1){
            path[i] = path[i-2]
        }
        else if (sArray[i] === "0" ){
            path[i] = path[i-1]
        }
        else if(sArray[i-1] === "0"){
            path[i] = path[i-1]
        }
        else if (parseInt(sArray[i-1]+sArray[i]) < 27 && i > 1){
            path[i] = path[i-1] + path[i-2]
        }
        else if (parseInt(sArray[i-1]+sArray[i]) < 27){
            path[i] = path[i-1] + 1
        }
        else{
            path[i] = path[i-1]
        }

    }


    return path[iterations-1]
    
    
};