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

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 * Runtime: 85 ms, faster than 71.00% of JavaScript online submissions for Find the Town Judge.
 * Memory Usage: 57.4 MB, less than 42.00% of JavaScript online submissions for Find the Town Judge.
 */
var findJudge = function(n, trust) {
     
     
    if (n === 1) return 1
    let people = new Set()
    let trusted = {}
    
    for (let i=0; i< trust.length; i++){
        people.add(trust[i][0])
        trusted[trust[i][1]] = (trusted[trust[i][1]] || 0 ) + 1
    }

    for (x in trusted){
        if (people.has(Number(x)) !== true && trusted[x] === n-1) return x
    }     
    
    return -1
};