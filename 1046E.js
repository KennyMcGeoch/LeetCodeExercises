/**
 * @param {number[]} stones
 * @return {number}
 * Runtime: 103 ms, faster than 48.90% of JavaScript online submissions for Last Stone Weight.
 * Memory Usage: 43.3 MB, less than 60.06% of JavaScript online submissions for Last Stone Weight.
 */
 var lastStoneWeight = function(stones) {

    if (stones.length === 1)return stones[0]
    stones.sort(function(a, b){return b-a})

    while(stones[1] > 0){
        stones[0] -= stones[1]
        stones[1] = 0
        stones.sort(function(a, b){return b-a})        
    }

    return stones[0]    
};