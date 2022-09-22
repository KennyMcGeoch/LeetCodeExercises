/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * Runtime: 112 ms, faster than 31.44% of JavaScript online submissions for Reverse String II.
Memory Usage: 44.9 MB, less than 57.72% of JavaScript online submissions for Reverse String II.
 */
 var reverseStr = function(s, k) {

    let solution = ""
    let solutionArray = []
    iterations = Math.ceil(s.length/k)

    for (i=0; i<iterations; i++){
        solutionArray.push(s.slice(k*i, k*(i+1)))
    }
    for (i=0; i<solutionArray.length;i++){
        if (i%2 === 0){
            for (j=k-1; j>=0; j--){
                solution += solutionArray[i].charAt(j)
            }
        }
        else{
            solution += solutionArray[i]
        }
    }

    return solution   
};

reverseStr("abcdefgh",3)