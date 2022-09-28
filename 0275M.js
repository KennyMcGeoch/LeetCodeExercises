/**
 * @param {number[]} citations
 * @return {number}
 * Runtime: 90 ms, faster than 60.78% of JavaScript online submissions for H-Index II.
Memory Usage: 43.8 MB, less than 72.55% of JavaScript online submissions for H-Index II.
 */
 var hIndex = function(citations) {
    
    let iterations = citations.length
    let hIndexVal = iterations

    for (i=0; i<iterations; i++){
        if (citations[i] >= hIndexVal){
            return hIndexVal
        }
        else{
            hIndexVal--
        }
    }

    return hIndexVal
    
};