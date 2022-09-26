/**
 * @param {string} s
 * @return {number}
 * Runtime: 109 ms, faster than 12.09% of JavaScript online submissions for Number of Segments in a String.
Memory Usage: 41.8 MB, less than 54.66% of JavaScript online submissions for Number of Segments in a String.
 */
 var countSegments = function(s) {
        
    return s.split(" ").filter(s => s !== "").length
    
};