/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 * Runtime: 813 ms, faster than 8.35% of JavaScript online submissions for Flatten Deeply Nested Array.
 * Memory Usage: 108.1 MB, less than 7.10% of JavaScript online submissions for Flatten Deeply Nested Array.
 */
var flat = function (arr, n) {
    let ans = arr
    while (n > 0){
        let brackets = 0
        let temp = []
        for (let i=0; i<ans.length; i++){
            if (ans[i] == "" && ans[i] !== 0)continue
            else if (ans[i][0] === undefined) temp.push(ans[i])
            else{
                brackets++
                for (let j=0; j<ans[i].length; j++){
                    if (ans[i][j] !== undefined)temp.push(ans[i][j])
                }
            }
        }
        ans = temp
        n--
        if (brackets === 0)return ans
    }
    return ans
    
};