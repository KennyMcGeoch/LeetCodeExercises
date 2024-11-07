/**
 * @param {number[]} candidates
 * @return {number}
 * Runtime: 156 ms, faster than 100.00% of JavaScript online submissions for Largest Combination With Bitwise AND Greater Than Zero.
 * Memory Usage: 75.5 MB, less than 16.67% of JavaScript online submissions for Largest Combination With Bitwise AND Greater Than Zero.
 */
var largestCombination = function(candidates) {
    let hash = []
    
    for (let i=0; i<candidates.length;i++){
        candidates[i] = candidates[i].toString(2)
        let count = 0
        let ind = candidates[i].length
        while(ind-- > 0){
            if (candidates[i][ind] === "1") hash[count] = (hash[count++] || 0) + 1
            else count++
        }
    }
    hash = hash.filter((a)=> a !== null)

    return Math.max(...hash)
};

/**
 * @param {number[]} candidates
 * @return {number}
 * Runtime: 145 ms, faster than 100.00% of JavaScript online submissions for Largest Combination With Bitwise AND Greater Than Zero.
 * Memory Usage: 75.2 MB, less than 16.67% of JavaScript online submissions for Largest Combination With Bitwise AND Greater Than Zero.
 */
var largestCombination = function(candidates) {
    let hash = new Array(24).fill(0)
    
    for (let i=0; i<candidates.length;i++){
        candidates[i] = candidates[i].toString(2)
        let count = 0
        let ind = candidates[i].length
        while(ind-- > 0){
            if (candidates[i][ind] === "1") hash[count++]++
            else count++
        }
    }

    return Math.max(...hash)
};