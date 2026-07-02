/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 * Runtime 74ms Beats 20.00%
 * Memory 56.34MB Beats 100.00%
 */
var findSafeWalk = function(grid, health) {
    let sum = new Array(grid.length)
    let yLen = grid.length
    let xLen = grid[0].length

    for (let i=0; i<sum.length; i++) sum[i] = new Array(grid[0].length).fill(0)

    function recur(x,y,hp){
        if (x < 0 || y < 0 || x === xLen || y === yLen) return
        if (grid[y][x] === 1){
            if (--hp === 0) return
        }
        if (sum[y][x] >= hp) return
        else sum[y][x] = hp
        recur(x-1,y,hp)
        recur(x+1,y,hp)
        recur(x,y+1,hp)
        recur(x,y-1,hp)

    }

    recur(0,0,health)

    return sum[sum.length-1][sum[0].length-1] > 0

};

/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 * Runtime 125ms Beats 6.67%
 * Memory 62.87MB Beats 73.33%
 */
var findSafeWalk = function(grid, health) {
    let sum = new Array(grid.length)
    let stack = [[0,0,health]]
    let yLen = grid.length
    let xLen = grid[0].length

    for (let i=0; i<sum.length; i++) sum[i] = new Array(grid[0].length).fill(0)

    function recur(x,y,hp){
        if (x < 0 || y < 0 || x === xLen || y === yLen) return
        if (grid[y][x] === 1){
            if (--hp === 0) return
        }
        if (sum[y][x] >= hp) return
        else sum[y][x] = hp
        if (x){
            if (grid[y][x-1]) stack.push([x-1,y,hp])
            else recur(x-1,y,hp)
        }
        if (y){
            if (grid[y-1][x]) stack.push([x,y-1,hp])
            else recur(x,y-1,hp)
        }
        if (x < xLen - 1){
            if (grid[y][x+1]) stack.push([x+1,y,hp])
            else recur(x+1,y,hp)
        }
        if (y < (yLen - 1)){
            if (grid[y+1][x]) stack.push([x,y+1,hp])
            else recur(x,y+1,hp)
        }        

    }
    while(stack.length){
        recur(...stack.pop())
    }

    return sum[sum.length-1][sum[0].length-1] > 0

};

/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 * Runtime 21ms Beats 73.33%
 * Memory 61.18MB Beats 90.00%
 */
var findSafeWalk = function(grid, health) {
    let sum = new Array(grid.length)
    let stack = [[0,0,health]]
    let yLen = grid.length
    let xLen = grid[0].length

    for (let i=0; i<sum.length; i++) sum[i] = new Array(grid[0].length).fill(0)

    function recur(x,y,hp){
        if (x < 0 || y < 0 || x === xLen || y === yLen) return
        if (grid[y][x] === 1){
            if (--hp === 0) return
        }
        if (sum[y][x] >= hp) return
        else sum[y][x] = hp
        if (x){
            if (grid[y][x-1]) stack.unshift([x-1,y,hp])
            else stack.push([x-1,y,hp])
        }
        if (y){
            if (grid[y-1][x]) stack.unshift([x,y-1,hp])
            else stack.push([x,y-1,hp])
        }
        if (x < xLen - 1){
            if (grid[y][x+1]) stack.unshift([x+1,y,hp])
            else stack.push([x+1,y,hp])
        }
        if (y < (yLen - 1)){
            if (grid[y+1][x]) stack.unshift([x,y+1,hp])
            else stack.push([x,y+1,hp])
        }        

    }
    while(stack.length){
        recur(...stack.pop())
    }

    return sum[sum.length-1][sum[0].length-1] > 0


};