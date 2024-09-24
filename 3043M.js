/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 * Runtime: 221 ms, faster than 87.50% of JavaScript online submissions for Find the Length of the Longest Common Prefix.
 * Memory Usage: 76.6 MB, less than 42.86% of JavaScript online submissions for Find the Length of the Longest Common Prefix.
 */
var longestCommonPrefix = function(arr1, arr2) {
    
    let trie = {}
    let max = 0
    for (let i=0; i<arr1.length; i++) buildTrie(arr1[i])
    for (let i=0; i<arr2.length; i++) max = Math.max(max, checkTrie(arr2[i]))
    
    function buildTrie(num){
        num = num.toString()
        let ind = 0
        let node = trie
        while(num[ind] !== undefined){
            if (node[num[ind]] === undefined) node[num[ind]] = {}
            node = node[num[ind]]
            ind++
        }
        return        
    }
    
    function checkTrie(num){
        num = num.toString()
        let total = 0
        let ind = 0
        let node = trie
        while(num[ind] !== undefined){
            if (node[num[ind]] === undefined) return total
            else node = node[num[ind++]]
            total++
        }
        return total
    }

    return max
    
};