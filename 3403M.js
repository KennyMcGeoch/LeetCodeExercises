/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 * Runtime 792ms Beats 6.67%
 * Memory 55.70MB Beats 80.00%
 */
var answerString = function(word, numFriends) {
    let start = 0
    let len = word.length - numFriends + 1
    if (numFriends === 1) return word

    for (let i=1; i<word.length; i++){
        for (let j=0; j<len; j++){
            if (word[start+j] < word[i+j]){
                start = i
                j = len
            }
            else if (word[start+j] > word[i+j]){
                j = len
            }
        }
    }
    return word.slice(start,start+len)
};