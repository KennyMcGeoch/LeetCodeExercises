/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * Runtime: 49 ms, faster than 100.00% of JavaScript online submissions for Word Pattern.
Memory Usage: 42.1 MB, less than 44.12% of JavaScript online submissions for Word Pattern.
 */
 var wordPattern = function(pattern, s) {

    let solutions = {};
    let iterations = pattern.length
    let modifiedStr = s.split(" ");

    if (iterations != modifiedStr.length){
        return false
    }

    for (i=0; i<iterations; i++){
        if (solutions[pattern[i]] === undefined){
            solutions[pattern[i]] = modifiedStr[i]
        }
        else if (solutions[pattern[i]] !== modifiedStr[i]){
            return false
        }
    }

    let solutionsArray = Object.keys(solutions).map(function (key) { return solutions[key]; });
    let setOne = new Set (pattern);
    let setTwo = new Set (solutionsArray)

    if (setOne.size !== setTwo.size){
        return false
    }

    return true
    
};

wordPattern("abba", "dog dog dog dog")