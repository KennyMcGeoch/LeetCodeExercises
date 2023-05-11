/**
 * @param {number} n
 * @return {number[][]}
 * Runtime: 58 ms, faster than 60.85% of JavaScript online submissions for Spiral Matrix II.
 * Memory Usage: 42.1 MB, less than 44.81% of JavaScript online submissions for Spiral Matrix II.
 */
var generateMatrix = function(n) {
    
    let arr = []
    let counter = 1
    let lastNum = n ** 2
    let maxX = n
    let maxY = n
    let minX = -1
    let minY = 0
    for (let i=0; i<n; i++){
        arr.push(Array.apply(null, Array(n)).map(function () {})) 
    }
    
    goRight(arr,0,0)

    function goRight(arr, y, x){
        if (counter > lastNum)return
        if (x === maxX) {
            goDown(arr,y+1,--maxX)
            return
        }
        arr[y][x] = counter++
        goRight(arr,y,x+1)
    }

    function goDown(arr, y, x){
        if (counter > lastNum)return
        if (y === maxY) {
            goLeft(arr,--maxY,x-1)
            return
        }
        arr[y][x] = counter++
        goDown(arr,y+1,x)
    }

    function goLeft(arr, y, x){
        if (counter > lastNum)return
        if (x === minX) {
            goUp(arr,y-1,++minX)
            return
        }
        arr[y][x] = counter++
        goLeft(arr,y,x-1)
    }

    function goUp(arr, y, x){
        if (counter > lastNum)return
        if (y === minY) {
            goRight(arr,++minY,x+1)
            return
        }
        arr[y][x] = counter++
        goUp(arr,y-1,x)
    }

    return arr
    
};