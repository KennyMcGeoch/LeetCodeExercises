/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 * Runtime: 139 ms, faster than 92.68% of JavaScript online submissions for Merge In Between Linked Lists.
 * Memory Usage: 62.2 MB, less than 45.12% of JavaScript online submissions for Merge In Between Linked Lists.
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let node = list1
    let remove = null
    let add = null
    let depth = 2
    b += 2
    
    while (add === null){
        if (depth === a) remove = node.next
        if (depth++ === b) add = node.next
        node = node.next
    }
    if (remove !== null) remove.next = list2
    else list1.next = list2
    node = list2
    while (node.next !== null) node = node.next
    node.next = add
    return list1
}; 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 * Runtime: 141 ms, faster than 90.24% of JavaScript online submissions for Merge In Between Linked Lists.
 * Memory Usage: 62.3 MB, less than 39.02% of JavaScript online submissions for Merge In Between Linked Lists.
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let node = list1
    let remove = null
    let add = null
    let depth = 2
    b += 2
    
    while (depth <= b){
        if (depth === a) remove = node.next
        if (depth++ === b) add = node.next
        node = node.next
    }
    if (remove !== null) remove.next = list2
    else list1.next = list2
    node = list2
    while (node.next !== null) node = node.next
    node.next = add
    return list1
}; 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 * Runtime: 136 ms, faster than 96.34% of JavaScript online submissions for Merge In Between Linked Lists.
 * Memory Usage: 62 MB, less than 64.63% of JavaScript online submissions for Merge In Between Linked Lists.
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let node = list1.next
    let remove = list1
    let add = null
    let depth = 2
    b += 2
    
    while (depth <= b){
        if (depth === a) remove = node
        if (depth++ === b) add = node

        node = node.next
    }
    remove.next = list2
    node = list2
    while (node.next !== null) node = node.next
    node.next = add
    return list1
}; 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 * Runtime: 138 ms, faster than 95.12% of JavaScript online submissions for Merge In Between Linked Lists.
 * Memory Usage: 61.7 MB, less than 82.93% of JavaScript online submissions for Merge In Between Linked Lists.
 */
var mergeInBetween = function(list1, a, b, list2) {
    
    let node = list1
    let remove = null
    let add = null
    let depth = 1
    b += 2
    
    while (depth <= b){
        if (depth === a) remove = node
        if (depth++ === b) add = node

        node = node.next
    }
    remove.next = list2
    node = list2
    while (node.next !== null) node = node.next
    node.next = add
    return list1
}; 