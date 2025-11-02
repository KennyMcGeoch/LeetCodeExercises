/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 * Runtime 104ms Beats 100.00%
 * Memory 93.97MB Beats 66.67%
 */
var countUnguarded = function(m, n, guards, walls) {

    let count = m * n
    count -= walls.length
    count -= guards.length
    let arr = []
    for (let i=0; i<m; i++)arr[i] = new Array(n).fill(1)
    for (let i=0; i<walls.length;i++) arr[walls[i][0]][walls[i][1]] = -1
    for (let i=0; i<guards.length; i++) arr[guards[i][0]][guards[i][1]] = -1
    for (let i=0; i<guards.length; i++){
        up(guards[i][0]-1,guards[i][1])
        down(guards[i][0]+1,guards[i][1])
        left(guards[i][0],guards[i][1]-1)
        right(guards[i][0],guards[i][1]+1)
        if (count === 0) return count
    }
    
    function up(x,y){
        if (x < 0) return
        if (arr[x][y] === -1) return
        if (arr[x][y] === 1){
            arr[x][y] = 0
            count--
        }
        return up(x-1,y)
    }
    function down(x,y){
        if (x === m) return
        if (arr[x][y] === -1) return
        if (arr[x][y] === 1){
            arr[x][y] = 0
            count--
        }
        return down(x+1,y)
    }
    function left(x,y){
        if (y < 0) return
        if (arr[x][y] === -1) return
        if (arr[x][y] === 1){
            arr[x][y] = 0
            count--
        }
        return left(x,y-1)
    }
    function right(x,y){
        if (y === n) return
        if (arr[x][y] === -1) return
        if (arr[x][y] === 1){
            arr[x][y] = 0
            count--
        }
        return right(x,y+1)
    }

    return count
};