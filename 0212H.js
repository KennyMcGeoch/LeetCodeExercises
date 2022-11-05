/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * Runtime: 6668 ms, faster than 11.49% of JavaScript online submissions for Word Search II.
 * Memory Usage: 58.3 MB, less than 10.18% of JavaScript online submissions for Word Search II.
 */
 var findWords = function(board, words) {

    let wordTree = {}
    let solution = []
    let iterationsY = board.length
    let iterationsX = board[0].length


    for (i=0; i<words.length; i++){
        createTree(wordTree, words[i],0)
    }
     

    function createTree(node, str, char){

        if (str.length === char){
            node.val = 1
            return
        }

        if (node[str[char]] === undefined){
            node[str[char]] = {val: 0}
        }

        return createTree(node[str[char]], str, char+1)
    }

    function checkTree(node,letter){
        let returnVal = 0
        if (node[letter] !== undefined) {
            returnVal++
            if (node[letter].val === 1) returnVal += 10
        }
        return returnVal
    }

    for (i=0; i<iterationsY; i++){
        for (j=0; j<iterationsX; j++){
            traverseMatrix(wordTree,"",j,i,[])
        }
    }

    function traverseMatrix(node, word, x,y, visited){
        square = x + (iterationsX * y)
        if (visited.includes(square))return
        let newVisit = [...visited]
        newVisit.push(square)
        if (x < 0 || y < 0 || x === iterationsX || y === iterationsY)return 0
        let letter = board[y][x]
        path = checkTree(node, letter)
        if (path > 9) {
            if (solution.includes(word + letter) === false){
            solution.push(word + letter)
                }
        }
        if (path % 10 === 1) word += letter
        else return 0
        let nextNode = node[letter]
        return traverseMatrix(nextNode, word, x+1, y,newVisit) + traverseMatrix(nextNode, word, x-1, y,newVisit) + traverseMatrix(nextNode, word, x, y+1,newVisit) + traverseMatrix(nextNode, word, x, y-1,newVisit)

    }

    return solution
    
};