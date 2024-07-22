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

    /**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 * Runtime: 77 ms, faster than 47.53% of JavaScript online submissions for Sort the People.
 * Memory Usage: 53.1 MB, less than 92.68% of JavaScript online submissions for Sort the People.
 */
var sortPeople = function(names, heights) {
    for (let i=1; i< names.length; i++){
        while(i > 0 && heights[i] > heights[i-1]){
            let heightTemp = heights[i-1]
            let namesTemp = names[i-1]
            heights[i-1] = heights[i]
            heights[i] = heightTemp
            names[i-1] = names[i]
            names[i--] = namesTemp            
        }
    }
    return names
};