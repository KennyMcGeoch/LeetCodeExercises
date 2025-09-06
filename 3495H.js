/**
 * @param {number[][]} queries
 * @return {number}
 * Runtime 17ms Beats 100.00%
 * Memory 89.24MB Beats 100.00%
 */
var minOperations = function(queries) {
    let arr = [0,3]
    let sum = [0,3]
    let ans = 0
    let curr = 0
    let ind = 0

    for (let i=2; i<15; i++){
        arr.push(((arr[arr.length-1]+1) * 4)-1)
        sum.push(sum[sum.length-1] + ((arr[arr.length-1])-arr[arr.length-2])*i)
    }
    arr.push(Infinity)

    for (let i=0; i<queries.length; i++){
        curr = 0
        while(queries[i][1] > arr[ind]) ind++
        curr += sum[ind-1]
        curr += ((queries[i][1] - arr[ind-1]) * ind)
        ind = 0
        while(queries[i][0] > arr[ind]) ind++
        if (ind){
            curr -= sum[ind-1]
            curr -= ((queries[i][0] - 1 - arr[ind-1]) * ind)
            ind = 0
        }
        
        ans += Math.ceil(curr/2)
    }
    
    return ans


};

/**
 * @param {number[][]} queries
 * @return {number}
 * Runtime 13ms Beats 100.00%
 * Memory 88.89MB Beats 100.00%
 */
let arr = [0,3]
let sum = [0,3]
for (let i=2; i<15; i++){
    arr.push(((arr[arr.length-1]+1) * 4)-1)
    sum.push(sum[sum.length-1] + ((arr[arr.length-1])-arr[arr.length-2])*i)
}
arr.push(Infinity)

var minOperations = function(queries) {

    let ans = 0
    let curr = 0
    let ind = 0

    for (let i=0; i<queries.length; i++){
        curr = 0
        while(queries[i][1] > arr[ind]) ind++
        curr += sum[ind-1]
        curr += ((queries[i][1] - arr[ind-1]) * ind)
        ind = 0
        while(queries[i][0] > arr[ind]) ind++
        if (ind){
            curr -= sum[ind-1]
            curr -= ((queries[i][0] - 1 - arr[ind-1]) * ind)
            ind = 0
        }
        
        ans += Math.ceil(curr/2)
    }
    
    return ans


};