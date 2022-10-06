/**
 * @param {string} command
 * @return {string}
 * Runtime: 114 ms, faster than 11.68% of JavaScript online submissions for Goal Parser Interpretation.
 * Memory Usage: 42.1 MB, less than 42.26% of JavaScript online submissions for Goal Parser Interpretation.
 */
 var interpret = function(command) {
    return command.split("()").join("o").split("(al)").join("al")    
};

interpret("G()(al)")