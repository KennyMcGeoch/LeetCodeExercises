/**
 * @param {number} n
 * @return {number}
 * Runtime: 42 ms, faster than 93.55% of JavaScript online submissions for N-th Tribonacci Number.
 * Memory Usage: 48.2 MB, less than 88.75% of JavaScript online submissions for N-th Tribonacci Number.
 */
let trib = [0,1,1]
for (let i=0; i<35; i++) trib.push(trib[i]+trib[i+1]+trib[i+2])

var tribonacci = function(n) {
    return trib[n]
    
};