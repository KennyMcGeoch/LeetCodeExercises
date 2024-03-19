/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * Runtime: 177 ms, faster than 48.21% of JavaScript online submissions for Task Scheduler.
 * Memory Usage: 45.2 MB, less than 97.46% of JavaScript online submissions for Task Scheduler.
 * Runtime: 88 ms, faster than 65.58% of JavaScript online submissions for Task Scheduler.
 * Memory Usage: 52.2 MB, less than 92.21% of JavaScript online submissions for Task Scheduler.
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

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 * Runtime: 73 ms, faster than 87.69% of JavaScript online submissions for Task Scheduler.
 * Memory Usage: 52.1 MB, less than 95.48% of JavaScript online submissions for Task Scheduler.
 */
var leastInterval = function(tasks, n) {
     
    if (n === 0) return tasks.length

    let freq = {}

    for (i=0; i<tasks.length; i++) freq[tasks[i]] = (freq[tasks[i]] || 0) + 1

    let max = 1
    let quant = 0
    
    for (x in freq){
        if (freq[x] > max){
            max = freq[x]
            quant = 1
        }
        else if (freq[x] === max) quant++
    }

    max--
    quant

    let total = ((n+1) * max) + quant
    
    return Math.max(total, tasks.length)    
    
};