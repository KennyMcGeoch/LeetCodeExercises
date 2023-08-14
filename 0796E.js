/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 * Runtime: 50 ms, faster than 84.77% of JavaScript online submissions for Rotate String.
 * Memory Usage: 41.7 MB, less than 71.99% of JavaScript online submissions for Rotate String.
 */
var rotateString = function(s, goal) {
    
    if (s.length !== goal.length)return false
    let str = s.split("")
    let loops = s.length
    
    for (let i=0; i<loops; i++){
        for (let j=0; j<loops; j){
            if (str[j] !== goal[j++]) j = loops + 1
            if (j === loops)return true
        }
        let temp = str.shift()
        str.push(temp)
    }
    return false
    
};