/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.42MB Beats 60.00%
 */
var canBeTypedWords = function(text, brokenLetters) {
    text = text.split(" ")

    for (let i=0; i<brokenLetters.length; i++) text = text.filter((a)=> a.includes(brokenLetters[i]) === false)

    return text.length
};

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 * Runtime 1ms Beats91.67%
 * Memory 55.37MB Beats63.33%
 */
var canBeTypedWords = function(text, brokenLetters) {
    if (brokenLetters.length === 26) return 0
    text = text.split(" ")

    for (let i=0; i<brokenLetters.length; i++) text = text.filter((a)=> a.includes(brokenLetters[i]) === false)

    return text.length
};