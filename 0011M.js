/**
 * @param {number[]} height
 * @return {number}
 * Runtime: 559 ms, faster than 5.02% of JavaScript online submissions for Container With Most Water.
Memory Usage: 49.7 MB, less than 58.62% of JavaScript online submissions for Container With Most Water.
 */
 var maxArea = function(height) {

    let solution = 0;
    let tempSolution = 0;
    let comparer = 0;
    let iterations = height.length;

    for (i=0; i<iterations-1; i++){
        if (height[i] > comparer){
            comparer = height[i]
            for (j=i+1; j<iterations; j++){
                tempSolution = Math.min(height[i], height[j]) * (j-i)
                if (tempSolution > solution) {
                    solution = tempSolution;  
                }             
            }
        }
    }
    return solution    
};

maxArea([1,8,6,2,5,4,8,3,7])