/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 * Runtime: 91 ms, faster than 67.02% of JavaScript online submissions for Most Profit Assigning Work.
 * Memory Usage: 56.7 MB, less than 61.70% of JavaScript online submissions for Most Profit Assigning Work.
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    
    let ans = 0
    
    for (let i=0; i<difficulty.length; i++) difficulty[i] = [difficulty[i] , profit[i]]
    difficulty.sort((a,b)=>a[0]-b[0])
    let max = 0
    for (let i=0; i<difficulty.length; i++) {
        max = Math.max(difficulty[i][1],max)
        difficulty[i][1] = max
    }
    
    for (let i=0; i<worker.length; i++){
        let temp = binarySearch(worker[i])
        if (temp === 0 && difficulty[0][0] > worker[i])continue
        ans += difficulty[temp][1]
    }
    
    function binarySearch(num){
        let left = 0
        let right = difficulty.length-1
        let cand = Math.floor((left+right)/2)
        
        while (left !== right && right > -1){
            if (difficulty[cand][0] <= num){
                left = cand
                cand = Math.ceil((left+right)/2)
            }
            else{
                right = cand-1
                cand = Math.floor((left+right)/2)
            }
        }
        return left
    }
    
    return ans


    
};