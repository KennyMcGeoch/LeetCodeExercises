/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * Runtime: 89 ms, faster than 77.07% of JavaScript online submissions for Merge k Sorted Lists.
 * Memory Usage: 46.8 MB, less than 96.80% of JavaScript online submissions for Merge k Sorted Lists.
 */
var mergeKLists = function(lists) {
    let arr = []
    
    for (i=0; i<lists.length; i++){
        check(lists[i])
    }
    
    
    function check(list){
        if (list === null)return
        arr.push(list.val)
        return check(list.next)
    }
    arr.sort((a,b)=>a-b)
    
    
    let lastVal = arr[arr.length-1]
    if (lastVal === undefined)return null
    let list = {val:lastVal, next:null}
    let node = list
    for (i=0; i<arr.length-1; i++){
        node.val = arr[i]
        node.next = { val: lastVal, next: null}
        node = node.next
    }
    return list
    
};