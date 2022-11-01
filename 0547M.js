/**
 * @param {number[][]} isConnected
 * @return {number}
 * Runtime: 103 ms, faster than 71.96% of JavaScript online submissions for Number of Provinces.
 * Memory Usage: 44.5 MB, less than 70.30% of JavaScript online submissions for Number of Provinces.
 */
 var findCircleNum = function(isConnected) {

    let elements = isConnected.length
    let provinces = 0
    let sorted = []

    for (i=0; i<elements; i++){
        if (sorted.includes(i))continue
        provinces++
        sort(i)
        
    }

    function sort(num){
        if (sorted.includes(num))return
        sorted.push(num)
        for (let j=0; j < isConnected[num].length; j++){
            if (isConnected[num][j] === 1)sort(j)
        }
        return
    }

    return provinces

    
};