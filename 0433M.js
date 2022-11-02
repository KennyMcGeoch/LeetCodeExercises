/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 * Runtime: 66 ms, faster than 86.44% of JavaScript online submissions for Minimum Genetic Mutation.
 * Memory Usage: 41.6 MB, less than 86.44% of JavaScript online submissions for Minimum Genetic Mutation.
 */
 var minMutation = function(start, end, bank) {

    if (bank.includes(end) === false) return -1
    let solution = Infinity

    bank.unshift(start)
    let iterations = bank.length

    mutations(0,[-1],0)  

    function mutations(curr, hist, time){
        if (time > solution) return
        if (bank[curr] === end){
            solution = Math.min(solution,time)
            return
        }
        if (hist.includes(curr))return
        let updatedHist = [...hist]
        updatedHist.push(curr)
        for (let i=1; i<iterations;i++){
            let changes = 0
            for (let j=0; j<8;j++){
                if (bank[curr][j] !== bank[i][j]) changes++
            }
            if (changes === 1){
                mutations(i,updatedHist,time+1)
            }
        }
    }

    if (solution === Infinity)return -1
    return solution
    
};