/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 * Runtime: 139 ms, faster than 59.68% of JavaScript online submissions for Sort the People.
 * Memory Usage: 46.8 MB, less than 67.18% of JavaScript online submissions for Sort the People.
 */
 var sortPeople = function(names, heights) {
    let combined = []
    let iterations = names.length
    
    for (i=0; i<iterations; i++){
        combined.push([names[i], heights[i]])
    }
    combined.sort((a,b)=> b[1] - a[1])
    let solution = []
    for (i=0; i<iterations; i++){
        solution.push(combined[i][0])
    }
    return solution
    };