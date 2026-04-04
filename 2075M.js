/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 * Runtime 85ms Beats 47.62%
 * Memory 102.01MB Beats 66.67%
 */
var decodeCiphertext = function(encodedText, rows) {
    let ans = new Array(encodedText.length)
    let curr = 0
    let row = 0
    let rowLen = ans.length/rows

    for (let i=0; i<encodedText.length; i++){
        if (curr >= row){
            ans[row + ((curr-row) * rows)] = encodedText[i]
        }
        if (++curr === rowLen){
            row++
            curr = 0
        }
    }

    while (ans[ans.length-1] == " " || ans[ans.length-1] == undefined && ans.length) ans.pop()

    return ans.join("")
};

/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 * Runtime 67ms Beats 95.24%
 * Memory 101.57MB Beats 66.67%
 */
var decodeCiphertext = function(encodedText, rows) {
    let ans = new Array(encodedText.length)
    let curr = 0
    let row = 0
    let rowLen = ans.length/rows

    for (let i=0; i<encodedText.length; i++){
        if (curr >= row){
            ans[row + ((curr-row) * rows)] = encodedText[i]
        }
        if (++curr === rowLen){
            row++
            curr = 0
        }
    }

    return ans.join("").trimEnd()
};

/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 * Runtime 28ms Beats 95.24% 
 * Memory 75.81MB Beats 100.00%
 */
var decodeCiphertext = function(encodedText, rows) {
    if (rows === 1) return encodedText
    let ans = new Array(encodedText.length)
    let curr = 0
    let row = 0
    let rowLen = ans.length/rows

    for (let i=0; i<encodedText.length; i++){
        if (curr >= row){
            ans[row + ((curr-row) * rows)] = encodedText[i]
        }
        if (++curr === rowLen){
            row++
            curr = 0
        }
    }

    return ans.join("").trimEnd()
};