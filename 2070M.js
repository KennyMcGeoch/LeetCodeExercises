/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 * Runtime: 59 ms, faster than 100.00% of JavaScript online submissions for Most Beautiful Item for Each Query.
 * Memory Usage: 82.5 MB, less than 100.00% of JavaScript online submissions for Most Beautiful Item for Each Query.
 */
var maximumBeauty = function(items, queries) {
    
    items.sort((a,b)=> {
        if (a[0] !== b[0]) return a[0] - b[0]
        else return b[1] - a[1]
    })
    let max = 0
    let arr = [[0,0]]
    for (let i=0; i<items.length; i++){
        if (items[i][1] > max){
            max = items[i][1]
            arr.push(items[i])
        }
    }
    let hash = {}
    let ans = []
    
    for (let i=0; i<queries.length; i++){
        if (hash[queries[i]] !== undefined) ans.push(hash[queries[i]])
        else{
            let ind = arr.findIndex((a) => a[0] > queries[i])
            if (ind === -1){
                hash[queries[i]] = arr[arr.length-1][1]
                ans.push(arr[arr.length-1][1])
            }
            else{
                hash[queries[i]] = arr[ind-1][1]
                ans.push(arr[ind-1][1])
            }
        }        
    }
    
    return ans
};