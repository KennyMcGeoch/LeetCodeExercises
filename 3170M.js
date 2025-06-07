/**
 * @param {string} s
 * @return {string}
 * Runtime 44ms Beats 100.00%
 * Memory 64.49MB Beats 100.00%
 */
var clearStars = function(s) {
    let arr = new Array(26)
    let ans = new Array(s.length)
    let min = 0
    
    for (let i=0; i<26; i++) arr[i] = []

    for (let i=0; i<s.length; i++){
        if (s[i] === "*"){
            min = 0
            while(arr[min].length === 0) min++
            arr[min].pop()
        }
        else arr[s.charCodeAt(i)-97].push(i)
    }

    for (let i=0; i<26; i++){
        for (let j=0; j<arr[i].length; j++){
            ans[arr[i][j]] = String.fromCharCode(i+97)
        }
    }

    return ans.filter((a)=> a !== undefined).join("")
};