/**
 * @param {number[][]} questions
 * @return {number}
 * Runtime 13ms Beats 80.39%
 * Memory 92.47MB Beats 47.06%
 */
var mostPoints = function(questions) {
    let arr = new Array(questions.length).fill(0)
    let ans = 0

    for (let i=0; i<questions.length; i++){
        if (questions[i][1] + i + 1 >= questions.length){
            ans = Math.max(ans, arr[i] + questions[i][0])
        }
        else{
            arr[i+1+questions[i][1]] = Math.max(arr[i+1+questions[i][1]], arr[i] + questions[i][0])
        }
        if (i+1 < arr.length)arr[i+1] = Math.max(arr[i],arr[i+1])
    }
    return ans
};