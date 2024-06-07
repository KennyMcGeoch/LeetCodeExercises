/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 * Runtime: 84 ms, faster than 97.11% of JavaScript online submissions for Replace Words.
 * Memory Usage: 65.3 MB, less than 54.96% of JavaScript online submissions for Replace Words.
 */
var replaceWords = function(dictionary, sentence) {
    
    let trie = { end : false}
    
    for (let i=0; i<dictionary.length; i++){
        let node = trie
        for (let j=0; j<dictionary[i].length; j++){
            if (node[dictionary[i][j]] === undefined){
                node[dictionary[i][j]] = { end : false}
            }
            node = node[dictionary[i][j]]
        }
        node.end = true
    }
    sentence = sentence.split(" ")
    for (let i=0; i<sentence.length; i++){
        let node = trie
        for (let j=0; j<sentence[i].length; j++){
            if (node.end){
                sentence[i] = sentence[i].slice(0,j)
            }
            else if (node[sentence[i][j]] === undefined) j = sentence[i].length
            else{
                node = node[sentence[i][j]]
            }
        }
    }
    
    return sentence.join(" ")
    
};