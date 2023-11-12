/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 * Runtime: 436 ms, faster than 83.59% of JavaScript online submissions for Bus Routes.
 * Memory Usage: 59.6 MB, less than 94.36% of JavaScript online submissions for Bus Routes.
 */
var numBusesToDestination = function(routes, S, T) {
    if (S === T) return 0
    let visited = new Set();
    visited.add(S)
    let added = true
    let count = 0
    
    while(added){
        added = false
        count++
        let temp = []
        for (let i=0; i<routes.length; i++){
            for (let j=0; j<routes[i].length; j++){
                if (visited.has(routes[i][j])){
                    temp.push(...routes[i])
                    j = routes[i].length
                    added = true
                    routes[i] = []
                } 
            }
        }
        for (let i=0; i<temp.length; i++){
            visited.add(temp[i])
        }
        if (visited.has(T)) return count
    }
    
    
    return -1;
};