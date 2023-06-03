/**
 * @param {Array} arr
 * @return {Generator}
 * Runtime: 121 ms, faster than 98.92% of JavaScript online submissions for Nested Array Generator.
 * Memory Usage: 58.8 MB, less than 98.38% of JavaScript online submissions for Nested Array Generator. Generator.
 */
var inorderTraversal = function*(arr) {
    for (let i=0; i<arr.length; i++){
        if (Array.isArray(arr[i])){
            arr = arr.flat(10000)
            i = -1
        }
    }  
    for (let i=0; i<arr.length; i++){
         yield arr[i]
    }  
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */