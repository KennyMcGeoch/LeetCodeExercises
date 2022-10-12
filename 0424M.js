/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Runtime: 549 ms, faster than 14.65% of JavaScript online submissions for Longest Repeating Character Replacement.
 * Memory Usage: 48.1 MB, less than 30.99% of JavaScript online submissions for Longest Repeating Character Replacement.
 */
 var characterReplacement = function(s, k) {

    let arrayContents = {}
    let arrayOrigin = []
    let arrayTest = []
    let iterations = s.length
    let maxTotal = 0
    let biggestNumber

    for (i=0; i<iterations; i++){
        arrayOrigin.push(s[i])
        if (arrayContents[s[i]] === undefined){
            arrayContents[s[i]] = 1
        }
        else{
            arrayContents[s[i]]++
        }
        arrayTest = Object.values(arrayContents)
        biggestNumber = Math.max(...arrayTest)
        
        if (biggestNumber + k >= arrayOrigin.length){
            if (maxTotal < arrayOrigin.length){
                maxTotal = arrayOrigin.length
            }

        }
        else{
            arrayContents[arrayOrigin[0]]--
            arrayOrigin.shift()
        }

    }

    return maxTotal    
};

characterReplacement("ABABAB",2)