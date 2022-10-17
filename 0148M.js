/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Runtime: 361 ms, faster than 27.36% of JavaScript online submissions for Sort List.
 * Memory Usage: 77.5 MB, less than 9.64% of JavaScript online submissions for Sort List.
 */
 var sortList = function(head) {
    
    let arrayList = []
    
    sortArray(head)
    
    function sortArray(node){
        if (node === null) return 0
        arrayList.push(node.val)
        return sortArray(node.next)
    }
    
    arrayList.sort((a,b) => a-b)
    changeList(head, 0)
    
    function changeList (node, depth){
        if (node === null) return 0
        node.val = arrayList[depth]
        return changeList(node.next, depth+1)
    }
    
    return head  
};