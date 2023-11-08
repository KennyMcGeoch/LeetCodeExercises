/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 * Runtime: 45 ms, faster than 96.83% of JavaScript online submissions for Determine if a Cell Is Reachable at a Given Time.
 * Memory Usage: 43.2 MB, less than 71.49% of JavaScript online submissions for Determine if a Cell Is Reachable at a Given Time.
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    
    if (sx === fx && sy === fy && t === 1) return false
    fx = Math.abs(sx-fx)
    fy = Math.abs(sy-fy)
    
    if (fx > t || fy > t) return false
    
    return true
    
};