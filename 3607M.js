/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 * Runtime 340ms Beats 50.00%
 * Memory 158.61MB Beats 33.33%
 */
var processQueries = function(c, connections, queries) {
    let online = new Array(c+1).fill(1)
    let unionArr = new Array(c+1).fill(-1)
    let unionHash = new Array(c+1).fill()
    for (let i=0; i<unionHash.length; i++) unionHash[i] = []
    let union = []
    let curr
    let ans = []
    for (let i=0; i<connections.length; i++){
        unionHash[connections[i][1]].push(connections[i][0])
        unionHash[connections[i][0]].push(connections[i][1])

    }
    function findLinks(val){
        for (let j=0; j<unionHash[val].length; j++){
            if (curr.has(unionHash[val][j])) continue
            else{
                curr.add(unionHash[val][j])
                findLinks(unionHash[val][j])
            }
        }
        return
    }
    for (let i=1; i<unionHash.length; i++){
        if (unionHash[i] == 0 || unionHash[i].length === 0) continue
        curr = new Set()
        curr.add(i)
        findLinks(i)
        for (x of curr){
            unionArr[x] = union.length
            unionHash[x] = 0
        }
        union.push(Infinity)
    }
    queries.reverse()
    for (let i=0; i<queries.length; i++){
        if (queries[i][0] === 2) online[queries[i][1]]--
    }
    for (let i=1; i<online.length; i++){
        if (online[i] === 1 && unionArr[i] > - 1 && i < union[unionArr[i]]) union[unionArr[i]] = i
    }
    for (let i=0; i<queries.length; i++){
        if (queries[i][0] === 2){
            if (online[queries[i][1]]++ === 0){
                if (queries[i][1] < union[unionArr[queries[i][1]]]) union[unionArr[queries[i][1]]] = queries[i][1]
            }
        }
        else if (online[queries[i][1]] > 0) ans.push(queries[i][1])
        else{
            if (unionArr[queries[i][1]] === -1) ans.push(-1)
            else if (union[unionArr[queries[i][1]]] == Infinity) ans.push(-1)
            else ans.push(union[unionArr[queries[i][1]]])
        }
    }
    return ans.reverse()
};