/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * Runtime: 191 ms, faster than 37.60% of JavaScript online submissions for Find the Town Judge.
 * Memory Usage: 50.6 MB, less than 64.10% of JavaScript online submissions for Find the Town Judge.
 */
 var findJudge = function(n, trust) {

    iterations = trust.length
    if (iterations === n) return -1
    if (iterations === 0 && n === 1) return 1
    let candidate = {}

    for (i=0; i<iterations; i++){
        if (candidate[trust[i][1]] === undefined){
            candidate[trust[i][1]] = 1
        }
        else{
            candidate[trust[i][1]]++
        }
        candidate[trust[i][0]] = n * -1
    }
    let solution = Object.keys(candidate).sort((a,b)=> candidate[b]-candidate[a])
    if (candidate[solution[0]] + 1 == n)return solution[0]
    return -1
};