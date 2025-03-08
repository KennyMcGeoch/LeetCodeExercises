/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.07MB Beats 31.78%
 */
var minimumRecolors = function(blocks, k) {
    let white = 0
    let black = 0
    
    for (let i=0; i<k; i++){
        if (blocks[i] === "W") white++
        else black++
    }
    let ans = white
    for (let i=k; i<blocks.length;i++){
        if (blocks[i] === "W") white++
        else black++
        if (blocks[i-k] === "W") white--
        else black--
        ans = Math.min(ans,white)
        if (ans === 0) return ans
    }
    return ans
};