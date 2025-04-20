/**
 * @param {number[]} answers
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.81MB Beats88.37%
 */
var numRabbits = function(answers) {
    let hash = {}
    let ans = 0
    for (let i=0; i<answers.length; i++) hash[answers[i]] = (hash[answers[i]] || 0) + 1
    for (x in hash){
        ans += (Math.ceil(hash[x]/(Number(x)+1)) * (Number(x)+1))
    }
    return ans
};