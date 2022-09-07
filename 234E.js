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
 */
 var isPalindrome = function(head) {
    // let result = true;
    // for (i = 0; i < head.length; i++){
    //     j = head.length - (i+1);
    //     if (head[i] !== head[j]){
    //         console.log(head[i]);
    //         console.log(head[j]);
    //         console.log(i);
    //         console.log(j);
    //         result = false;
    //     }
    // }
    // console.log(result)
    listLength = getCount();
    console.log(listLength)
    
    

    console.log(listNode.head.val)
    console.log(listNode.head.next.val)
    console.log(getLast().val);


    return 
};
function getCount() {
    var temp = listNode.head;
    var count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }
    return count;
}

function getLast() {
    let node = listNode.head;
    var count = 0;
    while (node) {
        if (!node.next)
        {
            return node;
        }
        node = node.next;
    }
    return;
}

const listNode = {
    head: {
        val: 6,
        next: {
            val: 10,                                             
            next: {
                val: 12,
                next: {
                    val: 3,
                    next: null	
                    }
                }
            }
        }
    };
  
isPalindrome(listNode);