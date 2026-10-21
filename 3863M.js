/**
 * @param {string} s
 * @return {number}
 * Runtime 52ms Beats 7.69%
 * Memory 63.53MB Beats 7.69%
 */
var minOperations = function(s) {
    if (s.length < 2) return 0
    if (s.length === 2){
        if (s[1] < s[0]) return -1
        else return 0
    }
    let min = "z"
    let max = "a"
    let order = true

    for (let i=1; i<s.length-1; i++){
        if (s[i] < s[i-1]) order = false
        if (s[i] < min) min = s[i]
        if (s[i] > max) max = s[i]
    }
    if (s[0] > max && s[s.length-1] < min && s[0] >= s[s.length-1]) return 3
    if (min > s[s.length-1]) min = s[s.length-1]
    if (max < s[0]) max = s[0]

    if (order){
        if (s[0] <= s[1] && s[s.length-1] >= s[s.length-2]) return 0
    }
    if (s[0] <= min) return 1
    else if (s[s.length-1] >= max) return 1

    return 2
};