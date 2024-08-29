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

/**
 * @param {number[][]} stones
 * @return {number}
 * Runtime: 216 ms, faster than 17.70% of JavaScript online submissions for Most Stones Removed with Same Row or Column.
 * Memory Usage: 57 MB, less than 50.44% of JavaScript online submissions for Most Stones Removed with Same Row or Column.
 */
var removeStones = function(stones) {

    let ans = 0
    
    while (stones.length){
        let x = new Set()
        let y = new Set()
        let changed = true
        x.add(stones[stones.length-1][0])
        y.add(stones[stones.length-1][1])
        stones.pop()
        while(changed){
            changed = false
            for (let i=0; i<stones.length; i++){
                if (x.has(stones[i][0])){
                    y.add(stones[i][1])
                    stones[i] = ""
                    changed = true
                    ans++
                }
                else if (y.has(stones[i][1])){
                    x.add(stones[i][0])
                    stones[i] = ""
                    changed = true
                    ans++
                }
            }
            stones = stones.filter((a)=> a !== "")
        }
    }

    return ans
    
};

/**
 * @param {number[][]} stones
 * @return {number}
 * Runtime: 212 ms, faster than 17.70% of JavaScript online submissions for Most Stones Removed with Same Row or Column.
 * Memory Usage: 56.6 MB, less than 53.10% of JavaScript online submissions for Most Stones Removed with Same Row or Column.
 */
var removeStones = function(stones) {

    let ans = 0
    
    while (stones.length){
        let x = new Set()
        let y = new Set()
        let changed = true
        x.add(stones[stones.length-1][0])
        y.add(stones[stones.length-1][1])
        stones.pop()
        while(changed){
            changed = false
            for (let i=stones.length-1; i>-1; i--){
                if (x.has(stones[i][0])){
                    y.add(stones[i][1])
                    stones[i] = ""
                    changed = true
                    ans++
                }
                else if (y.has(stones[i][1])){
                    x.add(stones[i][0])
                    stones[i] = ""
                    changed = true
                    ans++
                }
            }
            stones = stones.filter((a)=> a !== "")
        }
    }

    return ans
    
};