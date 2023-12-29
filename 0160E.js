/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * Runtime: 73 ms, faster than 76.76% of JavaScript online submissions for Intersection of Two Linked Lists.
 * Memory Usage: 49.5 MB, less than 83.36% of JavaScript online submissions for Intersection of Two Linked Lists.
 */
var getIntersectionNode = function(headA, headB) {
    
    function depth(node){
        let num = 0
        while (node !== null){
            num++
            node = node.next
        }
        return num
    }
    let depthA = depth(headA)
    let depthB = depth(headB)
    let nodeA = headA
    let nodeB = headB
    if (depthA > depthB){
        let loops = depthA - depthB
        for (let i=0; i<loops; i++){
            nodeA = nodeA.next
        }
    }
    else if (depthB > depthA){
        let loops = depthB - depthA
        for (let i=0; i<loops; i++){
            nodeB = nodeB.next
        }
    }
    while (nodeA !== null){
        if (nodeA === nodeB) return nodeA
        nodeA = nodeA.next
        nodeB = nodeB.next
    }
    
    return null
    
};