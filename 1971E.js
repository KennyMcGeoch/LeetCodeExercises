/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 * Runtime: 188 ms, faster than 100.00% of JavaScript online submissions for Find if Path Exists in Graph.
 * Memory Usage: 86.3 MB, less than 100.00% of JavaScript online submissions for Find if Path Exists in Graph.
 */
var validPath = function(n, edges, source, destination) {
    
    let seen = new Set()
    seen.add(source)
    let changes = true
    while (changes){
        changes = false
        for (let i=0; i<edges.length; i++){
            if (seen.has(edges[i][0]) || seen.has(edges[i][1])){
                seen.add(edges[i][0])
                seen.add(edges[i][1])
                edges[i] = ""
                changes = true
            }
        }
        if (seen.has(destination)) return true
        edges = edges.filter((a)=>a!== "")
    }

return false    
    
};