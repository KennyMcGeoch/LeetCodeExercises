/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Runtime: 98 ms, faster than 84.53% of JavaScript online submissions for Add Two Numbers II.
 * Memory Usage: 47.8 MB, less than 50.83% of JavaScript online submissions for Add Two Numbers II.
 */
var addTwoNumbers = function(l1, l2) {
    
    let arrOne = []
    let arrTwo = []
    let carry = 0
    
    while (l1 !== null){
        arrOne.push(l1.val)
        l1 = l1.next
    }
    while (l2 !== null){
        arrTwo.push(l2.val)
        l2 = l2.next
    }
    arrOne.reverse()
    arrTwo.reverse()
    let total = []
    if (arrOne.length > arrTwo.length){
            for (let i=0; i<arrOne.length; i++){
            if (arrTwo[i] === undefined)arrTwo[i] = 0
            let temp =arrOne[i] + arrTwo[i] + carry
            if (temp > 9){
                temp -= 10
                carry = 1
            }
            else carry = 0
            total.push(temp)
        }
    }
    else {
        for (let i=0; i<arrTwo.length; i++){
            if (arrOne[i] === undefined)arrOne[i] = 0
            let temp =arrOne[i] + arrTwo[i] + carry
            if (temp > 9){
                temp -= 10
                carry = 1
            }
            else carry = 0
            total.push(temp)
        }
    }
    if (carry === 1)total.push(1)
    total.reverse()
    let ans = {}
    let tempList = ans
    let i=0
    while (i < total.length - 1){
        tempList.val = total[i++]
        tempList.next = { val: null, next:null}
        tempList = tempList.next
    }
    tempList.val = total[i]
    tempList.next = null
    return ans
    
};