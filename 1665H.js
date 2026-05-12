/**
 * @param {number[][]} tasks
 * @return {number}
 * Runtime 30ms Beats 92.31%
 * Memory 84.90MB Beats 23.08%
 */
var minimumEffort = function(tasks) {
    tasks.sort((a,b)=> (a[1]-a[0])-(b[1]-b[0]))
    let ans = 0
    for (let i=0; i<tasks.length; i++) ans = Math.max(ans+tasks[i][0],tasks[i][1])
    return ans
};