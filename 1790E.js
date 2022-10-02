/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * Runtime: 96 ms, faster than 54.39% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
 * Memory Usage: 42.4 MB, less than 48.74% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
 */
 var areAlmostEqual = function(s1, s2) {

    if (s1.length !== s2.length){
        return false
    }

    const arrayOne = s1.split("")
    const arrayTwo = s2.split("")
    let swapLocation
    let mismatch = 0
    let iterations = s1.length

    for (i=0; i<iterations; i++){
        if (s1[i] !== s2[i]){
            if (mismatch === 0){
                mismatch++
                swapLocation = i
            }
            else{
                mismatch++
                if (mismatch > 2){
                    return false
                }
                else if(s1[i] !== s2[swapLocation] || s1[swapLocation] !== s2[i]){
                    return false
                }

            }
        }

    }

    if (mismatch === 1){
        return false
    }

    return true
    
};