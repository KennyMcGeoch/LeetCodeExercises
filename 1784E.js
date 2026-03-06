/**
 * @param {string} s
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 52.68MB Beats 97.62%
 */
var checkOnesSegment = function(s) {
    let first = s.length
    for (let i=0; i<s.length; i++){
        if (s[i] === "1"){
            while(s[++i] === "1") continue
            first = i
            i = s.length
        }
    }
    for (let i=first; i<s.length; i++){
        if (s[i] === "0"){
            while(s[++i] === "0") continue
            first = i
            i = s.length
        }
    }

    for (let i=first; i<s.length; i++){
        if (s[i] === "1") return false
    }

    return true
};