/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 * Runtime: 157 ms, faster than 48.72% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
 * Memory Usage: 50.9 MB, less than 19.41% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
 */
 var nearestValidPoint = function(x, y, points) {

    let manhattanDist = 10001
    let tempVal
    let iterations = points.length
    let smallestIndex = 0

    for (i=0; i<iterations; i++){
        if (points[i][0] === x){
            tempVal = Math.abs(points[i][1] - y)
            console.log(tempVal)

        }
        else if (points[i][1] === y){
            tempVal = Math.abs(points[i][0] - x)
            console.log(tempVal)

        }
        if (tempVal < manhattanDist){
            console.log("Manhattan update")
            manhattanDist = tempVal
            smallestIndex = i
            console.log(i + " " + " " + tempVal + " " + points[i])
            if (manhattanDist === 0){
                return smallestIndex
            }
        }
    }

    if (manhattanDist === 10001){
        return -1
    }

    return smallestIndex
    
};

nearestValidPoint(3,4,[[1,2],[3,1],[2,4],[2,3],[4,4]])