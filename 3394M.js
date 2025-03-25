/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 * Runtime 171ms Beats 100.00%
 * Memory 94.29MB Beats 100.00%
 */
var checkValidCuts = function(n, rectangles) {
    rectangles.sort((a,b)=>{
        if (a[0] !== b[0]) return a[0]-b[0]
        else return a[2] - b[2]
    })
    let vert = 0
    let max = rectangles[0][2]
    for (let i=1; i<rectangles.length; i++){
        if (rectangles[i][0] >= max){
            if (vert++ === 1) return true
        }
        max = Math.max(max,rectangles[i][2])
    }

    rectangles.sort((a,b)=>{
        if (a[1] !== b[1]) return a[1]-b[1]
        else return a[3] - b[3]
    })
    vert = 0
    max = rectangles[0][3]
    for (let i=1; i<rectangles.length; i++){
        if (rectangles[i][1] >= max){
            if (vert++ === 1) return true
        }
        max = Math.max(max,rectangles[i][3])
    }
    return false
    
};