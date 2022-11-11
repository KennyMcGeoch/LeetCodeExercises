/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * Runtime: 147 ms, faster than 55.35% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.
 * Memory Usage: 49.5 MB, less than 83.65% of JavaScript online submissions for Remove All Adjacent Duplicates in String II.
 */
 var removeDuplicates = function(s, k) {
    
    let stack = []
    let count = []
    let iterations = s.length
    let kminus = k-1

    for (i=0; i<iterations; i++){
        if (stack.length && s[i] === stack[stack.length-1]){
            if (count[count.length-1] === kminus){
                count.pop()
                for (j=0; j<kminus; j++){
                    stack.pop()
                }
            }
            else{
                stack.push(s[i])
                count[count.length-1]++
            }
        }
        else {
            stack.push(s[i])
            count.push(1)
        }
    }

    return stack.join("")    
};