/**
 * @param {string[][]} paths
 * @return {string}
 * Runtime: 54 ms, faster than 72.09% of JavaScript online submissions for Destination City.
 * Memory Usage: 44.2 MB, less than 57.81% of JavaScript online submissions for Destination City.
 */
var destCity = function(paths) {
    
    let hash = new Set()
    
    for (let i=0; i<paths.length; i++){
        for (let j=0; j<2; j++){
            if (hash.has(paths[i][j])) hash.delete(paths[i][j])
            else hash.add(paths[i][j])
        }
    }
    for (let i=0; i<paths.length; i++){
        if (hash.has(paths[i][1])) return paths[i][1]
    }
    
};

/**
 * @param {string[][]} paths
 * @return {string}
 * Runtime: 45 ms, faster than 95.68% of JavaScript online submissions for Destination City.
 * Memory Usage: 42.3 MB, less than 99.34% of JavaScript online submissions for Destination City.
 */
var destCity = function(paths) {
    
    let curr = paths[0][1]
    
    for (let i=1; i<paths.length; i++){
        if (paths[i][0] === curr){
            curr = paths[i][1]
            i = 0
        }
    }
    return curr
};