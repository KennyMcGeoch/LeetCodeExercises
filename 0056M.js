/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Runtime: 112 ms, faster than 87.99% of JavaScript online submissions for Merge Intervals.
 * Memory Usage: 49.3 MB, less than 50.12% of JavaScript online submissions for Merge Intervals.
 */
 var merge = function(intervals) {

    let solution = []
    let min = intervals[0][0]
    let max = intervals[0][1]
    let iterations = intervals.length

    for (i=1; i<iterations; i++){
        if (intervals[i][0] > max || intervals[i][1] < min){
            solution.push([min,max])
            min = intervals[i][0]
            max = intervals[i][1]
        }
        else{
            min = Math.min(intervals[i][0],min)
            max = Math.max(intervals[i][1],max)
        }
    }
    solution.push([min,max])

    return solution    
};