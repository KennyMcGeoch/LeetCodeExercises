/**
 * @param {number[][]} coordinates
 * @return {boolean}
 * Runtime: 115 ms, faster than 24.83% of JavaScript online submissions for Check If It Is a Straight Line.
 * Memory Usage: 43.8 MB, less than 73.47% of JavaScript online submissions for Check If It Is a Straight Line.
 */
 var checkStraightLine = function(coordinates) {

    let xGradient = coordinates[1][0] - coordinates[0][0]
    let yGradient = coordinates[1][1] - coordinates[0][1]
    let gradient = yGradient/xGradient
    let zeroIntercept = coordinates[0][1] - (coordinates[0][0] * gradient)
    let iterations = coordinates.length
    let expectedY = 0
    
        if (xGradient === 0){
        for (i=2; i<iterations; i++){
            if (coordinates[i][0] !== coordinates[0][0]){
                return false
            }
        }
        return true
    }
    if (yGradient === 0){
        for (i=2; i<iterations; i++){
            if (coordinates[i][1] !== coordinates[0][1]){
                return false
            }
        }
        return true
    }

    for (i=2; i<iterations; i++){
        expectedY = (coordinates[i][0] * gradient) + zeroIntercept
        if (expectedY !== coordinates[i][1]){
            return false
        }

    }

    return true
};