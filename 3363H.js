/**
 * @param {number[][]} fruits
 * @return {number}
 * Runtime 37ms Beats 83.33%
 * Memory 96.31MB Beats 33.33%
 */
var maxCollectedFruits = function(fruits) {
    let ans = 0
    let arr = []
    for (let i=0; i<fruits.length; i++) arr[i] = new Array(fruits.length).fill(0)
    arr[fruits.length-1][0] = 1
    arr[0][fruits.length-1] = 1
    for (let i=0; i<fruits.length; i++){
        ans += fruits[i][i]
    }
    for (let i=1; i<fruits.length-1; i++){
        for (let j=Math.max(i+1, fruits.length - (i+1)); j<fruits.length; j++){
            arr[j][i] = 1
            if (j === fruits.length-1) fruits[j][i] += Math.max(fruits[j-1][i-1] * arr[j-1][i-1],fruits[j][i-1] * arr[j][i-1])
            else fruits[j][i] += Math.max(fruits[j-1][i-1] * arr[j-1][i-1],fruits[j][i-1] * arr[j][i-1],fruits[j+1][i-1] * arr[j+1][i-1])
            
        }
    }
    for (let i=1; i<fruits.length-1; i++){
        for (let j=Math.max(i+1, fruits.length - (i+1)); j<fruits.length; j++){
            arr[i][j] = 1
            if (j === fruits.length-1) fruits[i][j] += Math.max(fruits[i-1][j-1] * arr[i-1][j-1],fruits[i-1][j] * arr[i-1][j])
            else fruits[i][j] += Math.max(fruits[i-1][j-1] * arr[i-1][j-1],fruits[i-1][j] * arr[i-1][j],fruits[i-1][j+1] * arr[i-1][j+1])
        }
    }

    return ans + fruits[fruits.length-1][fruits.length-2] + fruits[fruits.length-2][fruits.length-1]
};  