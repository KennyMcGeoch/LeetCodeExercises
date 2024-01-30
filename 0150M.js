/**
 * @param {string[]} tokens
 * @return {number}
 * Runtime: 53 ms, faster than 92.26% of JavaScript online submissions for Evaluate Reverse Polish Notation.
 * Memory Usage: 51.8 MB, less than 21.29% of JavaScript online submissions for Evaluate Reverse Polish Notation.
 */
var evalRPN = function(tokens) {
    
    let stack = []
    
    for (let i=0; i<tokens.length; i++){
        switch(tokens[i]){
            case "+":
                stack.push(parseInt(stack.pop()) + parseInt(stack.pop()))
                break;
            case "-":
                let tempSub = parseInt(stack.pop())
                stack.push(parseInt(stack.pop()) - tempSub)
                break;
            case "*":
                stack.push(parseInt(stack.pop()) * parseInt(stack.pop()))
                break;
            case "/":
                let tempDiv = parseInt(stack.pop())
                stack.push(Math.trunc(parseInt(stack.pop())/tempDiv))
                break;
            default:
                stack.push(tokens[i])
                break;
            }      
    }
    
    return stack[0]
    
};

/**
 * @param {string[]} tokens
 * @return {number}
 * Runtime: 40 ms, faster than 99.85% of JavaScript online submissions for Evaluate Reverse Polish Notation.
 * Memory Usage: 51.9 MB, less than 19.25% of JavaScript online submissions for Evaluate Reverse Polish Notation.
 */
var evalRPN = function(tokens) {
    
    let stack = []
    
    for (let i=0; i<tokens.length; i++){
        switch(tokens[i]){
            case "+":
                stack.push(stack.pop() + stack.pop())
                break;
            case "-":
                let tempSub = stack.pop()
                stack.push(stack.pop() - tempSub)
                break;
            case "*":
                stack.push(stack.pop() * stack.pop())
                break;
            case "/":
                let tempDiv = stack.pop()
                stack.push(Math.trunc(stack.pop()/tempDiv))
                break;
            default:
                stack.push(parseInt(tokens[i]))
                break;
            }      
    }
    
    return stack[0]
    
};