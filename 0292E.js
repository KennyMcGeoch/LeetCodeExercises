/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 90 ms, faster than 52.36% of JavaScript online submissions for Nim Game.
Memory Usage: 41.9 MB, less than 34.78% of JavaScript online submissions for Nim Game.
 */
 var canWinNim = function(n) {
    
    if (n%4 === 0){
        return false
    }
    else{
        return true
    }
    
};