/**
 * @param {string} directions
 * @return {number}
 * Runtime 12ms Beats 89.47%
 * Memory 58.32MB Beats 100.00%
 */
var countCollisions = function(directions) {
    let stat = false
    let right = 0
    let ans = 0

    for (let i=0; i<directions.length; i++){
        if (directions[i] === "R") right++
        else if (directions[i] === "S"){
            if (right) ans += right
            stat = true
            right = 0
        }
        else{
            if (right){
                ans += right+1
                right = 0
                stat = true
            }
            else if (stat) ans++
        }
    }

    return ans
};