/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 * Runtime: 81 ms, faster than 42.99% of JavaScript online submissions for JSON Deep Equal.
 * Memory Usage: 45.9 MB, less than 73.98% of JavaScript online submissions for JSON Deep Equal.
 */
var areDeeplyEqual = function(o1, o2) {
    
    if (o1 === o2) return true
    else if (Array.isArray(o1) !== Array.isArray(o2))return false
    else if (typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null) return false
    else if (Object.keys(o1).length !== Object.keys(o2).length) return false
         
   
     for (x in o1){
        if (!areDeeplyEqual(o1[x], o2[x])) return false;
        }

    return true
    
};