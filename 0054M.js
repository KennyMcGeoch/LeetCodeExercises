const { kill } = require("process");

/**
 * @param {number[][]} matrix
 * @return {number[]}
 * Runtime: 100 ms, faster than 29.42% of JavaScript online submissions for Spiral Matrix.
 * Memory Usage: 42.4 MB, less than 5.84% of JavaScript online submissions for Spiral Matrix.
 */
 var spiralOrder = function(matrix) {

    let solution = []
    solution.push(matrix[0][0])
    let height = matrix.length
    let width = matrix[0].length
    let result = matrix.map(a => {return {...a}})
    result[0][0] = null
    let arraySize = matrix.flat().length
    let i = 0


    leftRight(0,0)

    function leftRight(x,y){
        if (solution.length === arraySize){
            return
        }
        for (i=1; i+x<width; i++){
            if (result[x][y+i] !== null && result[x][y+i] !== undefined){
                result[x][y+i] = null
                solution.push(matrix[x][y+i])
            }
            else{
                i--
                return upDown((y+i),x)
            }
        }
        i--
        return upDown((y+i),x)

    }
    function upDown(x,y){
        if (solution.length === arraySize){
            return
        }
        for (i=1; i+y<height; i++){
            if (result[y+i][x] !== null && result[y+i][x] !== undefined){
                result[y+i][x] = null
                solution.push(matrix[y+i][x])
            }
            else{
                i--
                return rightLeft((y+i),x)
            }
        }
        i--
        return rightLeft((y+i),x)

    }
    function rightLeft(x,y){
        if (solution.length === arraySize){
            return
        }
        for (i=1; y-i>=0; i++){
            if (result[x][y-i] !== null && result[x][y-i] !== undefined){
                result[x][y-i] = null
                solution.push(matrix[x][y-i])
            }
            else{
                i--
                return downUp(x,(y-i))
            }
        }
        i--
        return downUp(x,(y-i))

    }

    function downUp(x,y){
        if (solution.length === arraySize){
            return
        }
        for (i=1; x-i>0; i++){
            if (result[x-i][y] !== null && result[x-i][y] !== undefined){
                result[x-i][y] = null
                solution.push(matrix[x-i][y])
            }
            else{
                i--
                return leftRight((x-i),y)
            } 
        }
        i--
        return leftRight((x-i),y)

    }
    return solution 
};

spiralOrder([[23,18,20,26,25],[24,22,3,4,4],[15,22,2,24,29],[18,15,23,28,28]])