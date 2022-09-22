/**
 * @param {string} s
 * @return {string}
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
    console.log(solution)
    
    
};

reverseWords("Let's try this")