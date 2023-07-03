/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * Runtime: 53 ms, faster than 98.07% of JavaScript online submissions for Buddy Strings.
 * Memory Usage: 43.6 MB, less than 54.44% of JavaScript online submissions for Buddy Strings.
 */
var buddyStrings = function(s, goal) {
    
    if (s.length !== goal.length)return false
    
    let indexOne = null
    let indexTwo = null
      
    for (let i=0; i<s.length; i++){
        if (s[i] !== goal[i]){
            if (indexOne === null) indexOne = i
            else if (indexTwo === null) indexTwo = i
            else return false
            
        }
    }
    if (indexOne === null)return new Set(s).size !== s.length
    if (indexTwo !== null && s[indexOne] === goal[indexTwo] && s[indexTwo] === goal[indexOne])return true
    
    return false
    
};