/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * 
 * Runtime: 8061 ms, faster than 5.00% of JavaScript online submissions for Palindrome Linked List.
Memory Usage: 81.1 MB, less than 39.06% of JavaScript online submissions for Palindrome Linked List.
 * 
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let curr = head;
    var len = 1;
    let last = null;
    let secondToLast = null;
    if (curr && curr.next === null) return true;
    while (curr.next !== null) {
        len++;
        secondToLast = curr;
        curr = curr.next;
    }
    last = curr;
    if (len === 2) {
        if (head.val === last.val) return true;
        
        return false;
    }
    if (head.val === last.val) {
        secondToLast.next = null;
        last.val = null;
        last = null;
        return isPalindrome(head.next);
    } else {
        return false;
    }
}