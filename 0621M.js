/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * Runtime: 177 ms, faster than 48.21% of JavaScript online submissions for Task Scheduler.
 * Memory Usage: 45.2 MB, less than 97.46% of JavaScript online submissions for Task Scheduler.
 */
 var leastInterval = function(tasks, n) {
     
    if (n === 0) return tasks.length

    let letterAmount = {}
    let iterations = tasks.length

    for (i=0; i<iterations; i++){
        if (letterAmount[tasks[i]] === undefined){
            letterAmount[tasks[i]] = 1
        }
        else{
            letterAmount[tasks[i]]++
        }
    }

    let sortVals = Object.values(letterAmount).sort((a,b)=>b-a)
     
    if (iterations/sortVals[0] >= n + 1)return iterations
     
    let total = ((n+1) * (sortVals[0] - 1)) + 1
    
    for (i=1; i<n; i++){
        if (sortVals[i] === sortVals[0]){
            total++
        }
        else{
            return Math.max(iterations, total)
        }
    }
     
    return Math.max(iterations, total)
    
};