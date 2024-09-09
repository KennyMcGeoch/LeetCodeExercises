/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 * Runtime: 576 ms, faster than 5.40% of JavaScript online submissions for Spiral Matrix IV.
 * Memory Usage: 90.4 MB, less than 37.84% of JavaScript online submissions for Spiral Matrix IV.
 */
var spiralMatrix = function(m, n, head) {
    
    let ans = []
    
    for (let i=0; i<m; i++) ans[i] = new Array(n).fill(-1)
    
    function right(x,y){
        if (head === null) return
        while( y < n && ans[x][y] === -1){
            ans[x][y++] = head.val
            head = head.next
            if (head === null) return
            
        }
        return down(x+1,y-1)
        
    }
    
    function down(x,y){
        if (head === null) return
        while( x < m && ans[x][y] === -1){
            ans[x++][y] = head.val
            head = head.next
            if (head === null) return
            
        }
        return left(x-1,y-1)
    }
    
    function left(x,y){
        if (head === null) return
        while( y > - 1 && ans[x][y] === -1){
            ans[x][y--] = head.val
            head = head.next
            if (head === null) return
            
        }
        return up(x-1,y+1)
    }
    
    function up(x,y){
        if (head === null) return
        while( x > -1 && ans[x][y] === -1){
            ans[x--][y] = head.val
            head = head.next
            if (head === null) return
            
        }
        return right(x+1,y+1)
        
    }
    
    right(0,0)
    return ans
    
    
};
