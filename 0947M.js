/**
 * @param {number[][]} stones
 * @return {number}
 * Runtime: 348 ms, faster than 16.84% of JavaScript online submissions for Most Stones Removed with Same Row or Column.
 * Memory Usage: 44.3 MB, less than 97.45% of JavaScript online submissions for Most Stones Removed with Same Row or Column.
 */
 var removeStones = function(stones) {

    let placed = []
    let iterations = stones.length
    let groups = 0

    for (i=0; i<iterations; i++){
        if (placed.includes(i))continue
        groups++
        place(i)
    }

    function place (num){
        if (placed.includes(num))return
        placed.push(num)

        for (let i = 0; i<iterations; i++){
            if (stones[i][0] === stones[num][0])place(i)
            if (stones[i][1] === stones[num][1])place(i)

        }
        return
    }

    return iterations - groups
    
};