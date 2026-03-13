/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 * Runtime 10ms Beats 100.00%
 * Memory 58.38MB Beats 80.00%
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
    let low = 1
    let high = 10
    let findHigh = true
    let curr = 0
    let cand = 0

    while(findHigh){
        curr = 0
        for (let i=0; i<workerTimes.length; i++){
            curr += Math.floor(-1 + ((1 + (8 * high/workerTimes[i])**0.5)))
        }
        if (curr > mountainHeight){
            findHigh = false
        }
        else{
            high *= 10
        }
    }

    high *=10


    while(high != low){
        cand = Math.min(Math.floor((high+low)/2), high-1)
        curr = 0
        for (let i=0; i<workerTimes.length; i++){
            curr += Math.floor((-1 + (1 + (8 * cand/workerTimes[i]))**0.5)/2)
        }
        if (curr < mountainHeight){
            low = cand + 1
        }
        else high = cand
    }

    return high
};