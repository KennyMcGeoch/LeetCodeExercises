/**
 * @param {string} path
 * @return {boolean}
 * Runtime: 42 ms, faster than 96.40% of JavaScript online submissions for Path Crossing.
 * Memory Usage: 42.1 MB, less than 53.24% of JavaScript online submissions for Path Crossing.
 */
var isPathCrossing = function(path) {
    
    let hash = { '0,0': true}
    let curr = [0,0]
    
    for (let i=0; i<path.length; i++){
        if (path[i] === "N") curr[0]++
        else if (path[i] === "S") curr[0]--
        else if (path[i] === "E") curr[1]++
        else curr[1]--
        
        if (hash[curr] === true) return true
        else hash[curr] = true
    }
    
    return false
    
};

/**
 * @param {string} path
 * @return {boolean}
 * Runtime: 42 ms, faster than 96.40% of JavaScript online submissions for Path Crossing.
 * Memory Usage: 42.1 MB, less than 53.24% of JavaScript online submissions for Path Crossing.
 */
var isPathCrossing = function(path) {
    
    let hash = { '0,0': true}
    let curr = [0,0]
    
    for (let i=0; i<path.length; i++){
        switch(path[i]){
            case "N": {
                curr[0]++
                break
            }
                case "S": {
                curr[0]--
                break
            }
                case "E": {
                curr[1]++
                break
            }
                case "W": {
                curr[1]--
                break
            }
            default: break
        }
        
        if (hash[curr] === true) return true
        else hash[curr] = true
    }
    
    return false
    
};