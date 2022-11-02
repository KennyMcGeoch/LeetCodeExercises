/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Runtime: 435 ms, faster than 6.41% of JavaScript online submissions for Combination Sum.
 * Memory Usage: 60.9 MB, less than 5.07% of JavaScript online submissions for Combination Sum.
 */
 var combinationSum = function(candidates, target) {

    tried = {}
    solution = []
    iterations = candidates.length
    usedNum = Array(iterations).fill(0)

    sums(usedNum,0)


    function sums (arr, total){
        if (tried[arr] !== undefined)return
        else tried[arr] = true
        if (total > target)return
        else if (total === target){
            let temp = []
            count = 0
            while (count < iterations){
                if (arr[count] > 0){
                    arr[count]--
                    temp.push(candidates[count])
                }
                else count++
            }
            solution.push(temp)
            return
        }

        for (let i=0; i<iterations; i++){
            let newArr = [...arr]
                newArr[i]++
            let newTotal = total + candidates[i]
            sums(newArr,newTotal)
        }
        return
    }
     

    return solution
    
};