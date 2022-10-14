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
 * Runtime: 141 ms, faster than 77.60% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 49.2 MB, less than 10.47% of JavaScript online submissions for Add Two Numbers.
 */
 var addTwoNumbers = function(l1, l2) {

    let arrayOne = []
    let arrayTwo = []
    let node = l1
    let totalArray = []

    traverseTree(l1,arrayOne)
    traverseTree(l2,arrayTwo)

    function traverseTree(node,arr){

        if (node === null)return

        arr.unshift(node.val)
        return traverseTree(node.next,arr)

    }
    if (arrayOne.length > arrayTwo.length){
        totalArray = arrayAdd(arrayOne.reverse(),arrayTwo.reverse())        
    }
    else{
        totalArray = arrayAdd(arrayTwo.reverse(),arrayOne.reverse())
    }
    function arrayAdd (arr1,arr2){
        for (i=0; i<arr2.length; i++){
            if (i+1 === arr2.length && arr1.length === arr2.length){
                if (parseInt((arr1[i] + arr2[i])/10) > 0){
                    arr1.push(parseInt((arr1[i] + arr2[i])/10))
                }
            } 
            else{
                arr1[i+1] = arr1[i+1] + (parseInt((arr1[i] + arr2[i])/10))
            }  
            arr1[i] = (arr1[i] + arr2[i]) % 10
        }
        for (i=arr2.length; i<arr1.length; i++){
            if (arr1[i] > 9){
                if (i+1 === arr1.length){
                    if (parseInt(arr1[i]/10) > 0){
                        arr1.push(parseInt(arr1[i]/10))
                    }
                } 
                else{
                    arr1[i+1] = arr1[i+1] + parseInt(arr1[i]/10)
                }                
                arr1[i] = arr1[i] % 10
            }
        }
        return arr1.reverse()
    }

    let nodeTwo = node
    while(totalArray.length){
        node.val = totalArray.pop()
        if (node.next === null && totalArray.length > 0){
            node.next = {val:[totalArray[totalArray.length-1]],next:null}
        }
            node = node.next

    }
    return nodeTwo 
};