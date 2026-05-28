/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 * Runtime 710ms Beats 100.00%
 * Memory 121.98MB Beats 100.00%
 */
var stringIndices = function(wordsContainer, wordsQuery) {
    let trie = {}
    let ans = []
    let min = 0
    let minVal = 100000

    function createTrie(node, str, ind, wordInd){
        if (node[str[ind]] === undefined){
            node[str[ind]] = {val: wordInd, len : str.length}
        }
        else if (node[str[ind]].len > str.length){
            node[str[ind]].len = str.length
            node[str[ind]].val = wordInd
        }
        if (ind) return createTrie(node[str[ind]],str,ind-1,wordInd)
    }

    for (let i=0; i<wordsContainer.length; i++){
        createTrie(trie, wordsContainer[i], wordsContainer[i].length-1, i)
        if (wordsContainer[i].length < minVal){
            minVal = wordsContainer[i].length
            min = i
        }
    }

    function checkTrie(node, curr, str, index){
        if (node[str[index]] === undefined) return curr
        curr = node[str[index]].val
        return checkTrie(node[str[index]], curr, str, index-1)
    }

    for (let i=0; i<wordsQuery.length; i++){
        ans.push(checkTrie(trie,min,wordsQuery[i], wordsQuery[i].length-1))
    }

    return ans
};