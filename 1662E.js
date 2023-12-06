/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 * Runtime: 95 ms, faster than 49.74% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
 * Memory Usage: 42.2 MB, less than 40.18% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
 */
 var arrayStringsAreEqual = function(word1, word2) {

    let compOne = ""
    let compTwo = ""

    compOne = convertArrToStr(word1)
    compTwo = convertArrToStr(word2)


    function convertArrToStr(arr){
        let ans = ""
        for (i=0; i<arr.length; i++){
            ans += arr[i]
        }
        return ans
    }
    return compOne === compTwo
};

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 Runtime: 42 ms, faster than 95.47% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
Memory Usage: 41.4 MB, less than 97.79% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
 */
var arrayStringsAreEqual = function(word1, word2) {

    return word1.join("") === word2.join("")
};