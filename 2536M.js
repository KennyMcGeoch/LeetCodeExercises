/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 * Runtime 57ms Beats 42.86%
 * Memory 79.48MB Beats100.00%
 */
var rangeAddQueries = function(n, queries) {
    let ans = new Array(n)
    for (let i=0; i<n; i++) ans[i] = new Array(n).fill(0)

    for (let i=0; i<queries.length; i++){
        for (let j=queries[i][0]; j <= queries[i][2]; j++){
            ans[j][queries[i][1]]++
            if (queries[i][3] < n-1) ans[j][queries[i][3]+1]--
        }
    }
    for (let i=0; i<n; i++){
        for (let j=1 ; j<n; j++){
            ans[i][j] += ans[i][j-1]
        }
    }

    return ans
};

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 * Runtime 62ms Beats 42.86%
 * Memory 79.25MB Beats100.00%
 */
var rangeAddQueries = function(n, queries) {
    let ans = new Array(n)
    for (let i=0; i<n; i++) ans[i] = new Array(n).fill(0)

    for (let i=0; i<queries.length; i++){
        if (queries[i][3] < n-1){
            for (let j=queries[i][0]; j <= queries[i][2]; j++){
            ans[j][queries[i][1]]++
            ans[j][queries[i][3]+1]--
            }
        }
        else{
            for (let j=queries[i][0]; j <= queries[i][2]; j++){
            ans[j][queries[i][1]]++
            }
        }
        
    }
    for (let i=0; i<n; i++){
        for (let j=1 ; j<n; j++){
            ans[i][j] += ans[i][j-1]
        }
    }

    return ans
};