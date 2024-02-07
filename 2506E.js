/**
 * @param {string[]} words
 * @return {number}
 * Runtime: 89 ms, faster than 87.50% of JavaScript online submissions for Count Pairs Of Similar Strings.
 * Memory Usage: 56.4 MB, less than 14.06% of JavaScript online submissions for Count Pairs Of Similar Strings.
 */
var similarPairs = function(words) {
    
    let hash = {}
    
    for (let i=0; i<words.length; i++){
        let temp = words[i].split("")
        temp = [...new Set(temp)].sort()
        if (hash[temp] === undefined) hash[temp] = [words[i]]
        else hash[temp].push(words[i])
    }
    
    let ans = 0

    for (x in hash) ans += (0.5 * (hash[x].length-1)*(hash[x].length))
                            
    return ans
    
};