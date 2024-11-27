/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 * Runtime: 11 ms, faster than 100.00% of JavaScript online submissions for Shortest Distance After Road Addition Queries I.
 * Memory Usage: 57.9 MB, less than 100.00% of JavaScript online submissions for Shortest Distance After Road Addition Queries I.
 */
var shortestDistanceAfterQueries = function(n, queries) {
    let arr = new Array(n)
    for (let i=0; i<n; i++) arr[i] = i
    let ans = []
    let hash = {}

    for (let i=0; i<queries.length; i++){
        recur(queries[i][1], arr[queries[i][0]] +1 )
        if (hash[queries[i][0]] === undefined) hash[queries[i][0]] = [queries[i][1]]
        else hash[queries[i][0]].push(queries[i][1])
        ans.push(arr[n-1])
    }

    function recur(ind, total){
        if (ind === n) return
        if (total >= arr[ind]) return
        arr[ind] = total++
        if (hash[ind] !== undefined){
            for (let j=0; j<hash[ind].length; j++){
                recur(hash[ind][j], total)
            }
        }
        return recur(ind+1, total)
    }

    return ans

};