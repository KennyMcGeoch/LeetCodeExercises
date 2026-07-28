/**
 * @param {string} s
 * @return {string}
 * Runtime 62ms Beats 72.73%
 * Memory 72.09MB Beats 50.00%
 */
var smallestPalindrome = function(s) {
    if (s.length === 1) return s
    let hash = new Array(26).fill(0)
    if (s.length % 2 === 0){
        for (let i=0; i<s.length/2; i++) hash[s.charCodeAt(i)-97]++
    }
    else{
        for (let i=0; i<(s.length-1)/2; i++) hash[s.charCodeAt(i)-97]++
    }
    s = s.split("")
    let curr = 0
    let count = 0

    while(curr < 26){
        while(hash[curr] === 0) curr++
        while(hash[curr]){
            s[count++] = String.fromCharCode(curr+97)
            s[s.length-count] = String.fromCharCode(curr+97)
            hash[curr]--
        }
    }
    return s.join("")
};

/**
 * @param {string} s
 * @return {string}
 * Runtime 381ms Beats 18.18%
 * Memory 72.91MB Beats 45.45%
 */
var smallestPalindrome = function(s) {
    let start
    if (s.length === 1) return s
    if (s.length % 2 === 0){
        start = s.slice(s.length/2).split("").sort()
        return start.join("") + start.reverse().join("")
    }
    else{
        start = s.slice((s.length/2) + 0.5).split("").sort()
        return start.join("") + s[(s.length/2)-0.5] + start.reverse().join("")
    }

    
};