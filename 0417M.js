/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {

    let solution = []
    let iterationsX = heights[0].length
    let iterationsY = heights.length
    let iterationsXX = iterationsX - 1
    let iterationsYY = iterationsY - 1
    let atlanticTest
    let pacificTest

    for (i=0; i<iterationsX; i++){
        for (j=0; j<iterationsY; j++){
            atlanticTest = JSON.parse(JSON.stringify(heights))
            pacificTest = JSON.parse(JSON.stringify(heights))
            let pacRes = pacific(j,i,pacificTest[j][i])
            let atRes = atlantic(j,i,atlanticTest[j][i])
            if (pacRes > 0 && atRes > 0){
                solution.push([j,i])
            }
        }
    }

    function pacific(y,x,val){
        if (y === iterationsY || x === iterationsX)return 0
        if (pacificTest[y][x] === "p")return 0
        let transVal = pacificTest[y][x]
        if (transVal > val) return 0
        if (y === 0 || x === 0)return 1
        pacificTest[y][x] = "p"
        return pacific(y+1,x,transVal) + pacific(y-1,x,transVal) + pacific(y,x+1,transVal) + pacific(y,x-1,transVal)
    }

    function atlantic(y,x,val){
        if (y < 0 || x < 0)return 0
        if (atlanticTest[y][x] === "a")return 0
        let transVal = atlanticTest[y][x]
        if (transVal > val) return 0
        if (y === iterationsYY || x === iterationsXX)return 1
        atlanticTest[y][x] = "a"
        return atlantic(y+1,x,transVal) + atlantic(y-1,x,transVal) + atlantic(y,x+1,transVal) + atlantic(y,x-1,transVal)
    }

    return solution
    
};

// Solution gets a TLE error. Way I'd recode it is to assign a true/false value to each starting
// from the pacific and atlantic edge if it can reach it using reverse logic. Then I simply check
// for true/false in two arrays.

/**
 * @param {number[][]} heights
 * @return {number[][]}
 * Runtime 15ms Beats 92.24%
 * Memory 64.92MB Beats 81.52%
 */
var pacificAtlantic = function(h) {
    
    let len = h.length
    let wid = h[0].length
    let ans = []

    let atl = new Array(len)
    let pac = new Array(len)
    for (let i=0; i<len; i++){
        atl[i] = new Array(wid).fill(0)
        pac[i] = new Array(wid).fill(0)
    }

    function recur(arr, x, y, curr){
        if (arr[x][y] || curr > h[x][y]) return
        else arr[x][y] = 1
        if (x) recur(arr,x-1,y, h[x][y])
        if (y) recur(arr,x,y-1, h[x][y])
        if (x < len-1) recur(arr,x+1,y,h[x][y])
        if (y < wid-1) recur(arr,x,y+1,h[x][y])
        return
    }

    for (let i=0; i<len; i++){
        recur(pac,i,0,0)
        recur(atl,i,wid-1,0)
    }
    for (let i=0; i<wid; i++){
        recur(pac, 0, i, 0)
        recur(atl, len-1, i, 0)
    }

    for (let i=0; i<len; i++){
        for (let j=0; j<wid; j++){
            if (atl[i][j] && pac[i][j]) ans.push([i,j])
        }
    }

    return ans
    
};