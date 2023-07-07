/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 * Runtime: 80 ms, faster than 82.46% of JavaScript online submissions for Maximize the Confusion of an Exam.
 * Memory Usage: 45 MB, less than 85.96% of JavaScript online submissions for Maximize the Confusion of an Exam.
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    
    let ts = 0
    let fs = 0
    let min = 0
    let max = 0
    let len = 0
    let total = 0
    
    while (max < answerKey.length){
        len++
        if (answerKey[max] === "F"){
            max++
            fs++
        }
        else {
            max++
            ts++
        }
        while(ts > k && fs > k){
                if (answerKey[min] === "F"){
                min++
                fs--
            }
            else {
                min++
                ts--
            }
            len--
        }
        if (total < len) total = len
    }
    
    return total
    
};