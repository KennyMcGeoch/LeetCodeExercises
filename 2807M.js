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
 * Runtime: 89 ms, faster than 79.78% of JavaScript online submissions for Insert Greatest Common Divisors in Linked List.
 * Memory Usage: 57.9 MB, less than 87.43% of JavaScript online submissions for Insert Greatest Common Divisors in Linked List.
 */
var insertGreatestCommonDivisors = function(head) {
    
    let node = head
    while(node.next){
        let newNode = {val:gcd(node.val, node.next.val), next : node.next}
        node.next = newNode
        node = node.next.next
    }
    
    
  function gcd(a, b) {
      if (!b) {
        return a;
      }

      return gcd(b, a % b);
    }
  
  return head
    
};