/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * Runtime: 322 ms, faster than 17.72% of JavaScript online submissions for Palindrome Linked List.
 * Memory Usage: 87.4 MB, less than 23.52% of JavaScript online submissions for Palindrome Linked List.
 */
 var isPalindrome = function(head) {
    
    let arrayList = []
    
    sortArray(head)
    
    function sortArray(node){
        if (node === null) return 0
        arrayList.push(node.val)
        return sortArray(node.next)
    }
    
    arrayList.reverse()
    
    return checkList(head, 0)
    
    function checkList (node, depth){
        if (node === null) return true
        if (node.val !== arrayList[depth]) return false
        return checkList(node.next, depth+1)
    }

}