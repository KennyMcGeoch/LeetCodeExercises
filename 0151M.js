/**
 * @param {string} s
 * @return {string}
 * Runtime: 66 ms, faster than 94.15% of JavaScript online submissions for Reverse Words in a String.
Memory Usage: 44.2 MB, less than 51.53% of JavaScript online submissions for Reverse Words in a String.
 */
 var reverseWords = function(s) {

    let solution = ""
    let solutionArray = s.split(" ").filter(spaceRemover)
    function spaceRemover(val){
        return val !== ""
    }
    solution = solutionArray.reverse().join(" ")
    return solution
    
};

reverseWords("The sky is  blue")