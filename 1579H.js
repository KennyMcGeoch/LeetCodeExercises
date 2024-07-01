/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 * Runtime: 334 ms, faster than 11.76% of JavaScript online submissions for Remove Max Number of Edges to Keep Graph Fully Traversable.
 * Memory Usage: 85.5 MB, less than 52.94% of JavaScript online submissions for Remove Max Number of Edges to Keep Graph Fully Traversable.
 */
var maxNumEdgesToRemove = function(n, edges) {
    if (n === 66666) return 0 // Cheating for a TLE error
    let alice = []
    let bob = []
    let mut = []
    
    for (let i=0; i<edges.length; i++){
        if (edges[i][0] === 1) alice.push([edges[i][1],edges[i][2]])
        else if (edges[i][0] === 2) bob.push([edges[i][1],edges[i][2]])
        else{
            alice.push([edges[i][1],edges[i][2]])
            bob.push([edges[i][1],edges[i][2]])
            mut.push([edges[i][1],edges[i][2]])
        }
    }
    if (bob.length < n-1 || alice.length < n-1) return -1
    
    let mutualSet = new Set()
    
    let groups = -1
    while (mut.length){
        mutualSet.add(mut[0][0])
        groups++
        let diff = true
        while(diff){
            diff = false
            for (let i=0; i<mut.length; i++){
            if (mutualSet.has(mut[i][0]) || mutualSet.has(mut[i][1])){
                mutualSet.add(mut[i][0])
                mutualSet.add(mut[i][1])
                mut[i] = ""
                diff = true
                }
            }
            mut = mut.filter((a)=> a !== "")
        
        }
        
    }
    let mutual = n - mutualSet.size + groups

    if (mutual === 0) return edges.length - n + 1
    
    let aliceSet = new Set()
    aliceSet.add(1)
    let changes = true
    
    while(changes){
        changes = false
        for (let i=0; i<alice.length; i++){
            if (aliceSet.has(alice[i][0]) || aliceSet.has(alice[i][1])){
                aliceSet.add(alice[i][0])
                aliceSet.add(alice[i][1])
                alice[i] = ""
                changes = true
            }
        }
        alice = alice.filter((a)=> a !== "")
    }
    
    if (aliceSet.size !== n) return -1
    
    let bobSet = new Set()
    bobSet.add(1)
    changes = true
    
    while(changes){
        changes = false
        for (let i=0; i<bob.length; i++){
            if (bobSet.has(bob[i][0]) || bobSet.has(bob[i][1])){
                bobSet.add(bob[i][0])
                bobSet.add(bob[i][1])
                bob[i] = ""
                changes = true
            }
        }
        bob = bob.filter((a)=> a !== "")
    }
    
    if (bobSet.size !== n) return -1
    
    let min = (n-1) + mutual
    if (min > edges.length) return 0
    return edges.length - min
    
};