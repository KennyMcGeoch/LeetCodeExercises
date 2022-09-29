/**
 * @param {number[]} citations
 * @return {number}
 * Runtime: 100 ms, faster than 45.08% of JavaScript online submissions for H-Index.
Memory Usage: 42.3 MB, less than 40.98% of JavaScript online submissions for H-Index.
 */
 var hIndex = function(citations) {

    sortedArray = citations.sort(function(a, b){return a - b})

    let iterations = citations.length
    let hIndexVal = iterations

    for (i=0; i<iterations; i++){
        if (sortedArray[i] >= hIndexVal){
            return hIndexVal
        }
        else{
            hIndexVal--
        }
    }

    return hIndexVal
    
};

hIndex([3,0,6,1,5])