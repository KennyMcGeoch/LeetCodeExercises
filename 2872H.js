/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 * Runtime 196ms Beats 0.00%
 * Memory 94.90MB Beats 33.33%
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    let ans = 0
    class Node{
        constructor(val){
            this.val = values[val]
            this.next = []
        }
    }

    let arr = new Array(n)
    for (let i=0; i<n; i++) arr[i] = []
    let has = new Set()
    for (let i=0; i<edges.length; i++){
        arr[edges[i][0]].push(edges[i][1])
        arr[edges[i][1]].push(edges[i][0])
    }
    
    class Tree{
        constructor(val){
            this.root = new Node(val)
        }
    }

    function addChild(parent, newVal){
        const newChild = new Node(newVal)
        parent.next.push(newChild)
    }
    
    let head = new Tree(0)
    fill(head.root, 0)
    function fill(node, val){
        let valid = 0
        has.add(val)
        for (let i=0; i<arr[val].length; i++){
            let cand = arr[val][i]
            if (has.has(cand) === false){
                addChild(node, cand)
                fill(node.next[valid++],cand)
            }
        }
    }
    function trav(node){
        let sum = node.val
        for (let i=0; i<node.next.length; i++){
            sum += trav(node.next[i])
        }
        if (sum % k === 0){
            ans++
            return 0
        }
        return sum
    }
    trav(head.root)
    return ans
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 * Runtime 109ms Beats 100.00%
 * Memory 91.68MB Beats 66.67%
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    let ans = 0

    let arr = new Array(n)
    for (let i=0; i<n; i++) arr[i] = []
    let hash = new Set()
    for (let i=0; i<edges.length; i++){
        arr[edges[i][0]].push(edges[i][1])
        arr[edges[i][1]].push(edges[i][0])
    }
    
    function recur(val){
        let sum = values[val]
        hash.add(val)
        for (let i=0; i<arr[val].length; i++){
            let cand = arr[val][i]
            if (hash.has(cand) === false){
                sum += recur(cand)
            }
        }
        if (sum % k === 0){
            ans++
            return 0
        }
        return sum
    }
    recur(0)
    
    return ans
};