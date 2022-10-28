/**
 * @param {string[]} strs
 * @return {string[][]}
 * Runtime: 710 ms, faster than 5.01% of JavaScript online submissions for Group Anagrams.
 * Memory Usage: 50.8 MB, less than 99.56% of JavaScript online submissions for Group Anagrams.
 */
 var groupAnagrams = function(strs) {

    let rearrange = [...strs]
    let iterations = strs.length
    let count = 0
    let solution = []

    for (i=0; i<iterations; i++){
        rearrange[i] = rearrange[i].split("").sort().join("")
    }

    for (i=0; i<iterations; i++){
        if (rearrange[i] !== null){
            solution[count] = [strs[i]]
            for (j=i+1; j<iterations; j++){
                if (rearrange[j] === rearrange[i]){
                    solution[count].push(strs[j])
                    rearrange[j] = null
                }
            }
            count++
        }
    }
    return solution    
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])