/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 * Runtime 95ms Beats 69.89%
 * Memory 67.16MB Beats 89.25%
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b)=>b-a)
    trainers.sort((a,b)=>b-a)
    let ans = 0
    let curr = 0

    for (let i=0; i<trainers.length; i++){
        while(trainers[i] < players[curr])curr++
        if (curr === players.length) return ans
        ans++
        curr++
    }

    return ans
};

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 * Runtime 97ms Beats 52.69%
 * Memory 67.58MB Beats 69.89%
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b)=>b-a)
    trainers.sort((a,b)=>b-a)
    let i = 0
    let j = 0

    while (i < trainers.length && j < players.length){
        if (trainers[i] >= players[j]) i++
        j++
    }

    return i
};

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 * Runtime 89ms Beats 95.70%
 * Memory 67.91MB Beats 36.56%
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b)=>b-a)
    trainers.sort((a,b)=>b-a)
    let tLen = trainers.length
    let pLen = players.length
    let i = 0
    let j = 0

    while (i < tLen && j < pLen){
        if (trainers[i] >= players[j]) i++
        j++
    }

    return i
};