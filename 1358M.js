/**
 * @param {string} s
 * @return {number}
 * Runtime 11ms Beats 85.48%
 * Memory 54.72MB Beats 54.44%
 */
var numberOfSubstrings = function(s) {
    let nextA = -1
    let nextB = -1
    let nextC = -1
    let ans = 0
    let curr

    for (let i=0; i<s.length;i++){
        curr = i
        while((nextA < i || nextB < i || nextC < i) && curr < s.length){
            if(s[curr] === "a") nextA = curr
            else if(s[curr] === "b") nextB = curr
            else nextC = curr
            curr++
        }
        if (nextA < i || nextB < i || nextC < i) return ans
        else ans += (s.length - Math.max(nextA,nextB,nextC))
    }
    return ans
};