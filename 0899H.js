/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * Runtime: 63 ms, faster than 100.00% of JavaScript online submissions for Orderly Queue.
 * Memory Usage: 44.9 MB, less than 38.89% of JavaScript online submissions for Orderly Queue.
 */
 var orderlyQueue = function(s, k) {
    
    if (k > 1) return s.split("").sort().join("")
    
    let doubleS = s + s
    let best = 0
    let iterations = s.length
    
    for (i=1; i< iterations; i++){
        let firstReduct = 0
        for (j=0; j<iterations; j++){
            temp = doubleS[best+j].localeCompare(doubleS[i+j])
            if (firstReduct === 0 && doubleS[i+j-1].localeCompare(doubleS[i+j]) === -1){
                firstReduct = j
            }
            if (temp === 1){
                best = i
                j = iterations
            }
            else if (temp === -1){
                j = iterations
                i += firstReduct
            }
        }
    }
    
    return doubleS.slice(best, best+iterations)    
    
};