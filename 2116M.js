/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 * Runtime 11ms Beats 92.31%
 * Memory 59.73MB Beats 73.08%

 */
var canBeValid = function(s, locked) {
    let left = 0
    let vari = 0
    if (s.length % 2 === 1) return false

    for (let i=0; i<s.length; i++){
        if (locked[i] === "0") vari++
        else if (s[i] === "(") left++
        else left--
        if (left < 0){
            left++
            vari--
            if (vari < 0) return false
        }
    }

    if (left > vari) return false
    left = 0
    vari = 0

    for (let i=s.length-1; i>-1; i--){
        if (locked[i] === "0") vari++
        else if (s[i] === ")") left++
        else left--
        if (left < 0){
            left++
            vari--
            if (vari < 0) return false
        }
    }

    return left <= vari
};

