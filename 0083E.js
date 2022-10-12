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
 * Runtime: 131 ms, faster than 22.22% of JavaScript online submissions for Remove Duplicates from Sorted List.
 * Memory Usage: 43.9 MB, less than 90.58% of JavaScript online submissions for Remove Duplicates from Sorted List.
 */
 var deleteDuplicates = function(head) {
    
    let node = head
    deleter(node)

    function deleter(node){
        if (node === null)return 0
        
        while (node.next !== null){
            if (node.val === node.next.val){
                node.next = node.next.next
            }
            else{
                node = node.next
            }
        }

        return
    }
    console.log(node)
    console.log(head)
    return node
};

deleteDuplicates({val:1, next :{val:1, next:{val:2, next:null}}})