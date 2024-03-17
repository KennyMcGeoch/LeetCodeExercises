/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * Runtime: 136 ms, faster than 22.07% of JavaScript online submissions for Insert Interval.
 * Memory Usage: 43.6 MB, less than 98.81% of JavaScript online submissions for Insert Interval.
 * Runtime: 73 ms, faster than 67.58% of JavaScript online submissions for Insert Interval.
 * Memory Usage: 54 MB, less than 67.42% of JavaScript online submissions for Insert Interval.
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

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * Runtime: 64 ms, faster than 92.59% of JavaScript online submissions for Insert Interval.
 * Memory Usage: 53.7 MB, less than 78.32% of JavaScript online submissions for Insert Interval.
 */
var insert = function(intervals, newInterval) {

    let ans = []
    
    intervals.push(newInterval)
    intervals.sort((a,b)=>a[0]-b[0])
    
     for (let i=0; i<intervals.length; i++){
         let min = intervals[i][0]
         let max = intervals[i][1]
         while(i < intervals.length-1 && max >= intervals[i+1][0]){
             max = Math.max(max, intervals[++i][1])
         }
         ans.push([min,max])
     }

     return ans    
};