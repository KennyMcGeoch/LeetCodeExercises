/**
 * @param {number[]} piles
 * @return {number}
 * Runtime: 159 ms, faster than 96.51% of JavaScript online submissions for Maximum Number of Coins You Can Get.
 * Memory Usage: 52.4 MB, less than 37.21% of JavaScript online submissions for Maximum Number of Coins You Can Get.
 */
var maxCoins = function(piles) {
    piles.sort((a,b)=>b-a)
    let max = 2 * piles.length/3
    let ans = 0
    
    for (let i=1; i<max; i+=2) ans += piles[i]

    return ans
    
};