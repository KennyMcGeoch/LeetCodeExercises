/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 * Runtime: 19 ms, faster than 68.33% of JavaScript online submissions for Take Gifts From the Richest Pile.
 * Memory Usage: 50.3 MB, less than 59.52% of JavaScript online submissions for Take Gifts From the Richest Pile.
 */
var pickGifts = function(gifts, k) {
    gifts.sort((a,b)=>b-a)
    
    while(k--){
        if (gifts[0] === 1) return gifts.length
        gifts[0] = Math.floor(gifts[0] ** 0.5)
        let curr = 0
        while(gifts[curr] < gifts[curr+1]){
            let temp = gifts[curr]
            gifts[curr] = gifts[curr+1]
            gifts[curr+1] = temp
            curr++
        }
    }
    return gifts.reduce((a,b)=>a+b)
};