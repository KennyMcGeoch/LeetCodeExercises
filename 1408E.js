/**
 * @param {string[]} words
 * @return {string[]}
 * Runtime 10ms Beats 12.31%
 * Memory 50.52MB Beats 18.46%
 */
var stringMatching = function(words) {
    let ans = []
    words.sort((a,b)=>a.length-b.length)
    
    for (let i=0; i<words.length; i++){
        for (let j=i+1; j<words.length; j++){
            if (words[j].search(words[i]) > -1){
                ans.push(words[i])
                j = words.length
            }
        }
    }

    return ans
    
};

/**
 * @param {string[]} words
 * @return {string[]}
 * Runtime 1ms Beats 94.36%
 * Memory 48.66MB Beats 94.36%
 */
var stringMatching = function(words) {
    let ans = []
    words.sort((a,b)=>a.length-b.length)
    
    for (let i=0; i<words.length; i++){
        for (let j=i+1; j<words.length; j++){
            if (words[j].includes(words[i])){
                ans.push(words[i])
                j = words.length
            }
        }
    }

    return ans
    
};