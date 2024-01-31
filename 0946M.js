/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * Runtime: 56 ms, faster than 69.12% of JavaScript online submissions for Validate Stack Sequences.
 * Memory Usage: 50.4 MB, less than 15.58% of JavaScript online submissions for Validate Stack Sequences.
 */
var validateStackSequences = function(pushed, popped) {
    
    let test = []
    let operations = pushed.length * 2
    let pushCount = 0
    let popCount = 0
    
    for (let i=0; i<operations; i++){
        if (test.length === 0 || test[test.length-1] !== popped[popCount]){
            if (pushCount === pushed.length)return false
            else test.push(pushed[pushCount++])
        }
        else{
            test.pop()
            popCount++
        }
    }
    
    return true
    
};

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * Runtime: 48 ms, faster than 92.92% of JavaScript online submissions for Validate Stack Sequences.
 * Memory Usage: 50.7 MB, less than 13.88% of JavaScript online submissions for Validate Stack Sequences.
 */
var validateStackSequences = function(pushed, popped) {
    
    if (pushed.length < 3) return true
    
    let test = []
    let operations = pushed.length * 2
    let pushCount = 0
    let popCount = 0
    
    for (let i=0; i<operations; i++){
        if (test.length === 0 || test[test.length-1] !== popped[popCount]){
            if (pushCount === pushed.length)return false
            else test.push(pushed[pushCount++])
        }
        else{
            test.pop()
            popCount++
        }
    }
    
    return true
    
    
    
};