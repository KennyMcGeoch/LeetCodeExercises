/**
 * @param {number[][]} arrays
 * @return {number}
 * Runtime: 102 ms, faster than 96.88% of JavaScript online submissions for Maximum Distance in Arrays.
 * Memory Usage: 66.6 MB, less than 96.88% of JavaScript online submissions for Maximum Distance in Arrays.
 */
var maxDistance = function(arrays) {
    
    let min = arrays[0][0]
    let minInd = 0
    let max = arrays[0][arrays[0].length-1]
    let maxInd = 0
    let minTwo = 100000
    let minTwoInd = 0
    let maxTwo = -100000
    let maxTwoInd = 0
    
    for (let i=1; i<arrays.length; i++){
        if (arrays[i][0] < min){
            minTwo = min
            minTwoInd = minInd
            min = arrays[i][0]
            minInd = i
        }
        else if (arrays[i][0] < minTwo){
            minTwo = arrays[i][0]
            minTwoInd = i 
        }
        
        if (arrays[i][arrays[i].length-1] > max){
            maxTwo = max
            maxTwoInd = maxInd
            max = arrays[i][arrays[i].length-1]
            maxInd = i
        }
        else if (arrays[i][arrays[i].length-1] > maxTwo){
            maxTwo = arrays[i][arrays[i].length-1]
            maxTwoInd = i
        }
    }
    
    if (maxInd !== minInd) return max - min
    
    return Math.max(max-minTwo,maxTwo-min)
    
};

/**
 * @param {number[][]} arrays
 * @return {number}
 * Runtime: 100 ms, faster than 96.88% of JavaScript online submissions for Maximum Distance in Arrays.
 * Memory Usage: 66.6 MB, less than 96.88% of JavaScript online submissions for Maximum Distance in Arrays.
 */
var maxDistance = function(arrays) {
    
    let min = arrays[0][0]
    let minInd = 0
    let max = arrays[0][arrays[0].length-1]
    let maxInd = 0
    let minTwo = 100000
    let maxTwo = -100000
    
    for (let i=1; i<arrays.length; i++){
        if (arrays[i][0] < min){
            minTwo = min
            min = arrays[i][0]
            minInd = i
        }
        else if (arrays[i][0] < minTwo){
            minTwo = arrays[i][0]
        }
        
        if (arrays[i][arrays[i].length-1] > max){
            maxTwo = max
            max = arrays[i][arrays[i].length-1]
            maxInd = i
        }
        else if (arrays[i][arrays[i].length-1] > maxTwo){
            maxTwo = arrays[i][arrays[i].length-1]
        }
    }
    
    if (maxInd !== minInd) return max - min
    
    return Math.max(max-minTwo,maxTwo-min)
    
};