/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * Runtime: 136 ms, faster than 22.07% of JavaScript online submissions for Insert Interval.
 * Memory Usage: 43.6 MB, less than 98.81% of JavaScript online submissions for Insert Interval.
 */
 var insert = function(intervals, newInterval) {

    let solution = []
    let min = newInterval[0]
    let max = newInterval[1]
    let iterations = intervals.length

    for (i=0; i<iterations; i++){
        if (intervals[i][0] > max || intervals[i][1] < min){
            solution.push([intervals[i][0],intervals[i][1]])
        }
        else{
            min = Math.min(intervals[i][0],min)
            max = Math.max(intervals[i][1],max)
        }
    }
    solution.push([min,max])

    solution.sort((a,b)=>a[0]-b[0])

    return solution    
};