/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 * Runtime 35ms Beats 100.00%
 * Memory 86.13MB Beats 100.00%
 */
var minScore = function(n, roads) {
    let union = new Set
    union.add(1)
    union.add(n)
    let changes = true
    let ans = Infinity

    while(changes){
        changes = false
        for (let i=0; i<roads.length; i++){
            if (union.has(roads[i][0])){
                union.add(roads[i][1])
                ans = Math.min(ans,roads[i][2])
                roads[i] = 0
                changes = true
            }
            else if (union.has(roads[i][1])){
                union.add(roads[i][0])
                ans = Math.min(ans,roads[i][2])
                roads[i] = 0
                changes = true
            }
        }
        roads = roads.filter((a)=>a)
    }

    return ans
};