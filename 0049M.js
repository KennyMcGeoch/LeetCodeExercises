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

/**
 * @param {string[]} strs
 * @return {string[][]}
 * Runtime: 135 ms, faster than 23.48% of JavaScript online submissions for Group Anagrams.
 * Memory Usage: 62.2 MB, less than 23.45% of JavaScript online submissions for Group Anagrams.
 */
var groupAnagrams = function(strs) {

    let hash = {}
    
    for (let i=0; i<strs.length; i++){
        let temp = new Array(26).fill(0)
        for (let j=0; j<strs[i].length; j++)temp[strs[i].charCodeAt(j)-97]++
        if (hash[temp] === undefined) hash[temp] = [strs[i]]
        else hash[temp].push(strs[i])
    }
    let ans = []
    for (x in hash) ans.push(hash[x])
     
    return ans
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 * Runtime: 128 ms, faster than 29.25% of JavaScript online submissions for Group Anagrams.
 * Memory Usage: 62.9 MB, less than 16.10% of JavaScript online submissions for Group Anagrams.
 */
var groupAnagrams = function(strs) {

    let hash = {}
    
    for (let i=0; i<strs.length; i++){
        let temp = new Array(26).fill(0)
        for (let j=0; j<strs[i].length; j++)temp[strs[i].charCodeAt(j)-97]++
        if (hash[temp] === undefined) hash[temp] = [strs[i]]
        else hash[temp].push(strs[i])
    }
     
    return Object.values(hash)
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 * Runtime: 84 ms, faster than 99.25% of JavaScript online submissions for Group Anagrams.
 * Memory Usage: 61.6 MB, less than 28.36% of JavaScript online submissions for Group Anagrams.
 */
var groupAnagrams = function(strs) {

    let hash = {}
    
    for (let i=0; i<strs.length; i++){
        let sorted = strs[i].split("").sort().join("")
        if (hash[sorted] === undefined) hash[sorted] = [strs[i]]
        else hash[sorted].push(strs[i])
    }
     
    return Object.values(hash)
};