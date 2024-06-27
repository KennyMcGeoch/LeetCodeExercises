/**
 * @param {number[][]} edges
 * @return {number}
 * Runtime: 72 ms, faster than 94.80% of JavaScript online submissions for Find Center of Star Graph.
 * Memory Usage: 64.3 MB, less than 69.50% of JavaScript online submissions for Find Center of Star Graph.
 */
var findCenter = function(edges) {
    if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) return edges[0][0]
    return edges[0][1]
    
};