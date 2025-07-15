/**
 * @param {string} word
 * @return {boolean}
 * Runtime 1ms Beats 53.85%
 * Memory 53.56MB Beats 94.23%
 */
var isValid = function(word) {
    if (word.length < 3) return false
    let vowel = false
    let con = false

    for (let i=0; i<word.length; i++){
        if (word[i] === "@") return false
        else if (word[i] === "#") return false
        else if (word[i] === "$") return false
        else if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u"
        || word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") vowel = true
        else if (word.charCodeAt(i) > 57) con = true
    }

    return con && vowel
};

/**
 * @param {string} word
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 53.63MB Beats 90.38%
 */
var isValid = function(word) {
    if (word.length < 3) return false
    let vowel = false
    let vowels = ["a","e","i","o","u","A","E","I","O","U"]
    let con = false

    for (let i=0; i<word.length; i++){
        if (word[i] === "@") return false
        else if (word[i] === "#") return false
        else if (word[i] === "$") return false
        else if (vowels.includes(word[i])) vowel = true
        else if (word.charCodeAt(i) > 57) con = true
    }

    return con && vowel
};

/**
 * @param {string} word
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 55.40MB Beats 42.31%
 */
var isValid = function(word) {
    if (word.length < 3) return false
    let vowel = false
    let vowels = ["a","e","i","o","u","A","E","I","O","U"]
    let falsy = ["@","#","$"]
    let con = false

    for (let i=0; i<word.length; i++){
        if (falsy.includes(word[i])) return false
        else if (vowels.includes(word[i])) vowel = true
        else if (word.charCodeAt(i) > 57) con = true
    }

    return con && vowel
};

/**
 * @param {string} word
 * @return {boolean}
 * Runtime 1ms Beats 53.85%
 * Memory 55.01MB Beats 51.92%
 */
var isValid = function(word) {
    if (word.length < 3) return false
    let vowel = false
    let vowels = new Set(["a","e","i","o","u","A","E","I","O","U"])
    let falsy = new Set(["@","#","$"])
    let con = false

    for (let i=0; i<word.length; i++){
        if (falsy.has(word[i])) return false
        else if (vowels.has(word[i])) vowel = true
        else if (word.charCodeAt(i) > 57) con = true
    }

    return con && vowel
};