/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 * Runtime: 120 ms, faster than 33.88% of JavaScript online submissions for Hand of Straights.
 * Memory Usage: 64.7 MB, less than 9.80% of JavaScript online submissions for Hand of Straights.
 */
var isNStraightHand = function(hand, groupSize) {
    
    if (hand.length % groupSize !== 0) return false
    
    let hash = {}
    let count = hand.length
    
    for (let i=0; i<hand.length; i++) hash[hand[i]] = (hash[hand[i]] || 0) + 1
    
    let vals = Object.keys(hash).map((a)=>Number(a))
    
    for (let i=0; i<vals.length-(groupSize-1); i++){
        let temp = hash[vals[i]]
        hash[vals[i]] = 0
        count -= temp
        if (temp > 0){    
            for (let j=1; j < groupSize; j++){
                if (vals[i+j] !== vals[i] + j) return false
                if (hash[vals[i+j]] < temp) return false
                else hash[vals[i+j]] -= temp
                count -= temp
            }
        }
    }
    
    return count === 0
    
};