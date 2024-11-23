/**
 * @param {character[][]} box
 * @return {character[][]}
 * Runtime: 246 ms, faster than 100.00% of JavaScript online submissions for Rotating the Box.
 * Memory Usage: 77.1 MB, less than 88.24% of JavaScript online submissions for Rotating the Box.
 */
var rotateTheBox = function(box) {
    let ans = []
    for (let i=0; i<box[0].length; i++) ans.push([])
    let start = 0
    let rock = 0
    
    for (let i=0; i<box.length; i++){
        start = 0
        rock = 0
        for (let j=0; j<box[i].length; j++){
            if (box[i][j] === ".")rock++
            else if (box[i][j] === "*"){
                for (let k=start; k<j; k++){
                    if (rock-- > 0) ans[k][i] = "."
                    else ans[k][i] = "#"
                }
                ans[j][i] = "*"
                start = j+1
                rock = 0
            }
        }
        for (let k=start; k<box[i].length; k++){
            if (rock-- > 0) ans[k][i] = "."
            else ans[k][i] = "#"
        }
    }
    
    for (let i=0; i<ans.length; i++){
        ans[i].reverse()
    }
    
    return ans
};