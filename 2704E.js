/**
 * @param {string} val
 * @return {Object}
 * Runtime: 60 ms, faster than 49.16% of JavaScript online submissions for To Be Or Not To Be.
 * Memory Usage: 41.3 MB, less than 94.75% of JavaScript online submissions for To Be Or Not To Be.
 */
var expect = function(val) {
    return {
        toBe: (valTwo) => {
            if (val === valTwo) return true
            else throw new Error("Not Equal")
        },
        notToBe: (valTwo) => {
            if (val !== valTwo) return true
            else throw new Error("Equal")
        }
    }    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */