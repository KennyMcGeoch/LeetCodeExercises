/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 * Runtime: 108 ms, faster than 41.92% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
 * Memory Usage: 44.4 MB, less than 17.62% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
 */
 var nextGreatestLetter = function(letters, target) {
    
    let iterations = letters.length
    let targetNum = target.charCodeAt()
    
    for (i=0; i<iterations; i++){
        if (letters[i].charCodeAt() > targetNum)   return letters[i]  
    }
    return letters[0]
};