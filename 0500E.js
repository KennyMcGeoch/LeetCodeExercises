/**
 * @param {string[]} words
 * @return {string[]}
 * Runtime: 47 ms, faster than 75.47% of JavaScript online submissions for Keyboard Row.
 * Memory Usage: 41.8 MB, less than 55.72% of JavaScript online submissions for Keyboard Row.
 */
var findWords = function(words) {
    
    const rowOne = new Set(['q','w','e','r','t','y','u','i','o','p','Q','W','E','R','T','Y','U','I','O','P'])
    const rowTwo = new Set(['a','s','d','f','g','h','j','k','l','A','S','D','F','G','H','J','K','L'])
    const rowThree = new Set(['z', 'x', 'c', 'v','b','n','m','Z','X', 'C', 'V', 'B','N', 'M'])
    let solution = []
    
    function checkSet(word, set){
        for (let i=1; i<word.length; i++){
            if (set.has(word[i]) === false)return false
        }
        solution.push(word)
    }
    
    for (let i=0; i<words.length; i++){
        if (rowOne.has(words[i][0])) checkSet(words[i],rowOne)
        else if (rowTwo.has(words[i][0])) checkSet(words[i],rowTwo)
        else if (rowThree.has(words[i][0])) checkSet(words[i],rowThree)
    }
    
    return solution
    
};