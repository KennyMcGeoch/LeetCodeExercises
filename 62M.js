/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * Runtime: 122 ms, faster than 7.98% of JavaScript online submissions for Unique Paths.
Memory Usage: 41.9 MB, less than 75.51% of JavaScript online submissions for Unique Paths.
 */
 var uniquePaths = function(m, n) {
    let paths = 1;

    for(let i = n; i < m + n - 1; i++){
        paths = paths * i / (i - n + 1); 
    }

    return paths;
};

uniquePaths(3,5)