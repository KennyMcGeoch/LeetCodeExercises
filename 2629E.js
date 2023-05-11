/**
 * @param {Function[]} functions
 * @return {Function}
 * Runtime: 69 ms, faster than 73.58% of JavaScript online submissions for Function Composition.
 * Memory Usage: 43.3 MB, less than 52.04% of JavaScript online submissions for Function Composition.
 */
var compose = function(functions) {
    functions.reverse()
	return function(x) {
        let answer = x
            for (i=0; i<functions.length; i++){
            answer = functions[i](answer)   
    }
        return answer
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */