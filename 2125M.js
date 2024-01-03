/**
 * @param {string[]} bank
 * @return {number}
 * Runtime: 68 ms, faster than 90.59% of JavaScript online submissions for Number of Laser Beams in a Bank.
 * Memory Usage: 48.9 MB, less than 100.00% of JavaScript online submissions for Number of Laser Beams in a Bank.
 */
var numberOfBeams = function(bank) {
    
    let prev = 0
    let ans = 0
    let loop = bank[0].length
    
    for (let i=bank.length-1; i>-1; i--){
        let temp = 0
        for (let j=0; j<loop; j++) if (bank[i][j] === "1")temp++
        ans += (temp * prev)
        if (temp > 0) prev = temp
    }
    
    return ans
    
};