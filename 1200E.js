/**
 * @param {number[]} arr
 * @return {number[][]}
 * Runtime 54ms Beats 75.70%
 * Memory 69.86MB Beats 65.49%
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b)

    let min = Infinity
    let ans = []
    for (let i=1; i<arr.length; i++){
        if (arr[i] === arr[i-1]) continue
        else if (arr[i]-arr[i-1] < min){
            ans = [[arr[i-1],arr[i]]]
            min = arr[i] - arr[i-1]
        }
        else if (arr[i]-arr[i-1] === min) ans.push([arr[i-1],arr[i]])
    }
    return ans
};