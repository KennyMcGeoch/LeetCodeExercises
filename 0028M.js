/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Runtime: 106 ms, faster than 21.21% of JavaScript online submissions for Find the Index of the First Occurrence in a String.
Memory Usage: 42 MB, less than 53.06% of JavaScript online submissions for Find the Index of the First Occurrence in a String.
 */
 var strStr = function(haystack, needle) {

    if (haystack.includes(needle) === false){
        return -1
    }
    else{
        return haystack.indexOf(needle)
    }
    
};

strStr("sadbutsad", "sad")