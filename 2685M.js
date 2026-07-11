/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * Runtime 32ms Beats 27.27%
 * Memory 65.22MB Beats 97.73%
 */
var countCompleteComponents = function(n, edges) {
    let ans = 0
    let changes = true
    let set = new Set()
    for (let i=0; i<edges.length; i++){
        set.add(edges[i][0])
        set.add(edges[i][1])
    }
    ans += (n - set.size)
    let count = 0

    while(edges.length){
        changes = true
        set = new Set()
        set.add(edges[0][0])
        count = 0
        while(changes){
            changes = false
            for (let i=0; i<edges.length; i++){
                if (set.has(edges[i][0])){
                    changes = true
                    set.add(edges[i][1])
                    count++
                    edges[i] = 0
                }
                if (set.has(edges[i][1])){
                    changes = true
                    set.add(edges[i][0])
                    count++
                    edges[i] = 0
                }
            }
            edges = edges.filter((a)=>a)

        }
        if (count === ((set.size)*(set.size-1)/2)) ans++
    }
    return ans
};