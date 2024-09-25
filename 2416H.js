/**
 * @param {string[]} words
 * @return {number[]}
 * Runtime: 961 ms, faster than 73.17% of JavaScript online submissions for Sum of Prefix Scores of Strings.
 * Memory Usage: 136 MB, less than 70.73% of JavaScript online submissions for Sum of Prefix Scores of Strings.
 */
var sumPrefixScores = function(words) {
    
    let hash = {}
    let ans = []
    
    for (let i=0; i<words.length; i++) createTrie(words[i],0,hash)
    for (let i=0; i<words.length; i++) ans.push(calcTrie(words[i],0,hash[words[i][0]],0))
    
    
    function createTrie(str,ind,node){
        if (ind === str.length){
            node.val++
            return
        }
        let char = str[ind]
        if (node === null){
            node[char] = {}
            node.val = 1
        }
        else if (node[char])node.val++
        else{
             node.val = (node.val || 0) + 1
             node[char] = {val:0}
        }
        return createTrie(str,ind+1,node[char])
    }
    
    function calcTrie(str,ind,node, total){
        if (ind === str.length) return total
        total += node.val
        return calcTrie(str, ind+1, node[str[ind+1]], total)
    }

    return ans

};