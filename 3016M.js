/**
 * @param {string} word
 * @return {number}
 * Runtime: 139 ms, faster than 92.00% of JavaScript online submissions for Minimum Number of Pushes to Type Word II.
 * Memory Usage: 59.9 MB, less than 84.00% of JavaScript online submissions for Minimum Number of Pushes to Type Word II.
 */
var minimumPushes = function(word) {
    
    let hash = {}
    
    for (let i=0; i<word.length; i++) hash[word[i]] = (hash[word[i]] || 0) + 1
    
    let arr = Object.values(hash).sort((a,b)=>b-a)
    
    let ans = 0
    
    for (let i=0; i<arr.length; i++)ans += arr[i]
    for (let i=8; i<arr.length; i++)ans += arr[i]
    for (let i=16; i<arr.length; i++)ans += arr[i]
    for (let i=24; i<arr.length; i++)ans += arr[i]
    
    return ans
    
};

/**
 * @param {string} word
 * @return {number}
 * Runtime: 153 ms, faster than 80.00% of JavaScript online submissions for Minimum Number of Pushes to Type Word II.
 * Memory Usage: 59.5 MB, less than 88.00% of JavaScript online submissions for Minimum Number of Pushes to Type Word II.
 */
var minimumPushes = function(word) {
    
    let hash = {}
    
    for (let i=0; i<word.length; i++) hash[word[i]] = (hash[word[i]] || 0) + 1
    
    let arr = Object.values(hash).sort((a,b)=>b-a)
    
    let ans = 0
    
    for (let i=0; i<Math.min(arr.length,8); i++)ans += arr[i]
    for (let i=8; i<Math.min(arr.length,16); i++)ans += (arr[i] * 2)
    for (let i=16; i<Math.min(arr.length,24); i++)ans += (arr[i] * 3)
    for (let i=24; i<arr.length; i++)ans += (arr[i] * 4)
    
    return ans
    
};

/**
 * @param {string} word
 * @return {number}
 * Runtime: 149 ms, faster than 88.00% of JavaScript online submissions for Minimum Number of Pushes to Type Word II.
 * Memory Usage: 60.9 MB, less than 24.00% of JavaScript online submissions for Minimum Number of Pushes to Type Word II.
 */
var minimumPushes = function(word) {
    
    let hash = {}
    
    for (let i=0; i<word.length; i++) hash[word[i]] = (hash[word[i]] || 0) + 1
    
    let arr = Object.values(hash)
    
    if (arr.length < 9) return arr.reduce((a,b)=>a+b)
    
    arr.sort((a,b)=>b-a)
    
    let ans = 0
    
    for (let i=0; i<Math.min(arr.length,8); i++)ans += arr[i]
    for (let i=8; i<Math.min(arr.length,16); i++)ans += (arr[i] * 2)
    for (let i=16; i<Math.min(arr.length,24); i++)ans += (arr[i] * 3)
    for (let i=24; i<arr.length; i++)ans += (arr[i] * 4)
    
    return ans
    
};

/**
 * @param {string} word
 * @return {number}
 * Runtime: 75 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Pushes to Type Word II.
 * Memory Usage: 56.3 MB, less than 100.00% of JavaScript online submissions for Minimum Number of Pushes to Type Word II.
 */
var minimumPushes = function(word) {
    
    let arr = new Array(26).fill(0)
    
    for (let i=0; i<word.length; i++) arr[word.charCodeAt(i)-97]++
    arr.sort((a,b)=>b-a)
    
    let ans = 0
    
    for (let i=0; i<Math.min(arr.length,8); i++)ans += arr[i]
    for (let i=8; i<Math.min(arr.length,16); i++)ans += (arr[i] * 2)
    for (let i=16; i<Math.min(arr.length,24); i++)ans += (arr[i] * 3)
    for (let i=24; i<arr.length; i++)ans += (arr[i] * 4)
    
    return ans
    
};