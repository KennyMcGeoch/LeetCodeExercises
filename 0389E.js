/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * Runtime: 130 ms, faster than 21.73% of JavaScript online submissions for Find the Difference.
 * Memory Usage: 44.1 MB, less than 55.20% of JavaScript online submissions for Find the Difference.
 */
 var findTheDifference = function(s, t) {

    let iterations = t.length
    let sArray = s.split("").sort()
    let tArray = t.split("").sort()


    for (i=0; i<iterations; i++){
        if (sArray[i] !== tArray[i]){
            return tArray[i]
        }
    }
    
};