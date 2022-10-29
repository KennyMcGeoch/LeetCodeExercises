/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 * Runtime: 354 ms, faster than 75.00% of JavaScript online submissions for Earliest Possible Day of Full Bloom.
 * Memory Usage: 79.2 MB, less than 83.33% of JavaScript online submissions for Earliest Possible Day of Full Bloom.
 */
 var earliestFullBloom = function(plantTime, growTime) {
     
    let iterations = plantTime.length
     
    let merged = []
    
    for (i=0; i<iterations; i++){
        merged.push([plantTime[i], growTime[i]])
    }
    
    merged.sort((a,b)=>b[1]-a[1])

    let plantDay = 0
    let maxBloom = 0    

    for (i=0; i<iterations; i++){
        plantDay += merged[i][0]
        maxBloom = Math.max(maxBloom, (plantDay + merged[i][1]))
    }

    return maxBloom
    
};