/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 * Runtime: 45 ms, faster than 86.57% of JavaScript online submissions for Rectangle Overlap.
 * Memory Usage: 48.6 MB, less than 55.22% of JavaScript online submissions for Rectangle Overlap.
 */
var isRectangleOverlap = function(rec1, rec2) {
    
    if (rec1[3] <= rec2[1]) return false
    else if (rec1[2] <= rec2[0]) return false
    else if (rec2[3] <= rec1[1]) return false
    else if (rec2[2] <= rec1[0]) return false
    
    return ((rec1[0] >= rec2[0] && rec1[0] <= rec2[2]) || (rec2[0] >= rec1[0] && rec2[0] <= rec1[2])) && ((rec1[1] >= rec2[1] && rec1[1] <= rec2[3]) || (rec2[1] >= rec1[1] && rec2[1] <= rec1[3]))
    
};

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 * Runtime: 43 ms, faster than 91.79% of JavaScript online submissions for Rectangle Overlap.
 * Memory Usage: 48.5 MB, less than 73.88% of JavaScript online submissions for Rectangle Overlap.
 */
var isRectangleOverlap = function(rec1, rec2) {
    
    if (rec1[3] <= rec2[1]) return false
    else if (rec1[2] <= rec2[0]) return false
    else if (rec2[3] <= rec1[1]) return false
    else if (rec2[2] <= rec1[0]) return false
    
    return true
    
};