/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 * Runtime: 165 ms, faster than 35.14% of JavaScript online submissions for Eliminate Maximum Number of Monsters.
 * Memory Usage: 64.7 MB, less than 18.92% of JavaScript online submissions for Eliminate Maximum Number of Monsters.
 */
var eliminateMaximum = function(dist, speed) {
    
    for (let i = 0; i<dist.length; i++){
        dist[i] /= speed[i]
    }
    
    dist.sort((a,b)=>a-b)    
    
    for (let i=0; i<dist.length; i++){
        if (i >= dist[i]) return i
    }
    
    return dist.length
    
};

/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 * Runtime: 155 ms, faster than 40.54% of JavaScript online submissions for Eliminate Maximum Number of Monsters.
 * Memory Usage: 60.8 MB, less than 35.14% of JavaScript online submissions for Eliminate Maximum Number of Monsters.
 */
var eliminateMaximum2 = function(dist, speed) {
    
    let order = false
    
    for (let i = 0; i<dist.length; i++){
        dist[i] /= speed[i]
        if (dist[i] <= i) order = true
    }
    
    if (order)dist.sort((a,b)=>a-b)    
    
    for (let i=0; i<dist.length; i++){
        if (i >= dist[i]) return i
    }
    
    return dist.length
    
};

/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 * Runtime: 152 ms, faster than 43.24% of JavaScript online submissions for Eliminate Maximum Number of Monsters.
 * Memory Usage: 61.8 MB, less than 32.43% of JavaScript online submissions for Eliminate Maximum Number of Monsters.
 */
var eliminateMaximum3 = function(dist, speed) {
    
    let order = false
    
    for (let i = 0; i<dist.length; i++){
        dist[i] /= speed[i]
        if (dist[i] > i) continue
        order = true
    }
    
    if (order)dist.sort((a,b)=>a-b)    
    
    for (let i=0; i<dist.length; i++){
        if (i < dist[i]) continue
        return i
    }
    
    return dist.length
    
};