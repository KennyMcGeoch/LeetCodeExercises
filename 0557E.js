/**
 * @param {string} s
 * @return {string}
 * Runtime: 139 ms, faster than 23.52% of JavaScript online submissions for Reverse Words in a String III.
Memory Usage: 48.6 MB, less than 38.62% of JavaScript online submissions for Reverse Words in a String III.
 */
 var reverseWords = function(s) {
    let iterations = s.length - 1
    let solution = ""
    let solutionArray = []

    for (i=iterations; i>=0; i--){
        solution += s.charAt(i)
    }

    solutionArray = solution.split(" ");
    solution = solutionArray.reverse().join(" ")
    return solution      
};

reverseWords("Let's try this")