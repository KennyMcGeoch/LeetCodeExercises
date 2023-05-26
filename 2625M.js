/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 * Runtime: 183 ms, faster than 60.45% of JavaScript online submissions for Flatten Deeply Nested Array.
 * Memory Usage: 87 MB, less than 37.04% of JavaScript online submissions for Flatten Deeply Nested Array.
 */
var flat = function (arr, n) {
    let ans = arr
    while (n > 0){
        let brackets = 0
        let temp = []
        for (let i=0; i<ans.length; i++){
            if (Array.isArray(ans[i])){
                if (ans[i][0] === undefined) continue
                else{
                    brackets++
                    for (let j=0; j<ans[i].length; j++){
                        if (ans[i][j] !== undefined)temp.push(ans[i][j])
                    }
                }
            }
            else temp.push(ans[i])
        }
        ans = temp
        n--
        if (brackets === 0)return ans
    }
    return ans
    
};