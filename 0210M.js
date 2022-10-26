/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * Runtime: 545 ms, faster than 5.04% of JavaScript online submissions for Course Schedule II.
 * Memory Usage: 74 MB, less than 5.04% of JavaScript online submissions for Course Schedule II.
 */
 var findOrder = function(numCourses, prerequisites) {


    let filler = numCourses * 2
    let courseReq = new Array(numCourses).fill(filler)
    let iterations = prerequisites.length
    let solution = []

    for (i=0; i<iterations; i++){
        if (courseReq[prerequisites[i][1]] === filler){
            courseReq[prerequisites[i][1]] = [prerequisites[i][0]]
        }
        else{
            addVar = prerequisites[i][1]
            courseReq[addVar].push(prerequisites[i][0])
        }
    }

    for (i=0; i<numCourses; i++){
        if (courseReq[i] === filler){
            courseReq[i] = []
        }
    }
    let change = true
    while(change){
        change = false
        for (i=0; i<courseReq.length; i++){
            if (courseReq[i].length === 0){
                solution.unshift(i)
                courseReq[i] = [-1]
                for (j=0; j<courseReq.length; j++){
                    courseReq[j] = courseReq[j].filter((a)=> a !== i)
                }
                change = true
            }
        }
    }
    if (solution.length < numCourses) return []
    return solution
};