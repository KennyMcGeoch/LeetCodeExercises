/**
 * @param {string} s
 * @return {number}
 * Runtime: 720 ms, faster than 10.64% of JavaScript online submissions for Find the Longest Substring Containing Vowels in Even Counts.
 * Memory Usage: 88.4 MB, less than 6.38% of JavaScript online submissions for Find the Longest Substring Containing Vowels in Even Counts.
 */
var findTheLongestSubstring = function(s) {
    
    let a = "1"
    let e = "1"
    let i = "1"
    let o = "1"
    let u = "1"
    let hash = {0:"11111"}
    let ans = 0
    
    for (let j=0; j<s.length; j++){
        if (s[j] === "a"){
            if (a === "1") a = "0"
            else a = "1"
        }
        else if (s[j] === "e"){
            if (e === "1") e = "0"
            else e = "1"
        }
        else if (s[j] === "i"){
            if (i === "1") i = "0"
            else i = "1"
        }
        else if (s[j] === "o"){
            if (o === "1") o = "0"
            else o = "1"
        }
        else if (s[j] === "u"){
            if (u === "1") u = "0"
            else u = "1"
        }
        hash[j+1] = a + e + i + o + u
    }

    for (let i=0; i<s.length; i++){
        for (let j=s.length; j>=0; j--){
            if (hash[j] === hash[i]){
                ans = Math.max(ans,j-i)
                j = -1
            }
        }
    }
    
    return ans
};