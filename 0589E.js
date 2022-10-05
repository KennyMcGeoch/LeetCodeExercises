/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 * Runtime: 128 ms, faster than 52.90% of JavaScript online submissions for N-ary Tree Preorder Traversal.
 * Memory Usage: 45.5 MB, less than 50.49% of JavaScript online submissions for N-ary Tree Preorder Traversal.
 */
 var preorder = function(root) {
    if (!root) return [];
    
    const stack = [root];
    const result = [];
    
    while (stack.length) {
        const next = stack.pop();
        
        result.push(next.val);
        
            while (next.children.length) {
                stack.push(next.children.pop());
            }
    }    
    return result;
};

preorder({
    val: 1,
    children: [
      { val: 3, children: [{val:5, children:[]},{val:6, children:[]}] },
      { val: 2, children: [] },
      { val: 4, children: [] }
    ]
  })