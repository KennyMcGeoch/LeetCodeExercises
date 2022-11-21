/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 * Runtime: 9552 ms, faster than 5.43% of JavaScript online submissions for Nearest Exit from Entrance in Maze.
 * Memory Usage: 49.9 MB, less than 98.45% of JavaScript online submissions for Nearest Exit from Entrance in Maze.
 */
 var nearestExit = function(maze, entrance) {

    let dist = Infinity
    let iterationsX = maze[0].length - 1
    let iterationsY = maze.length - 1
    maze[entrance[0]][entrance[1]] = 0

    mazeRunner(entrance[0],entrance[1], 0)

    function mazeRunner(y,x, depth){
        if (depth > dist)return 0
        let newDepth = depth
        if (y < 1 || y >= iterationsY){
            if (y < 0 || y > iterationsY)return 0
            else if (maze[y][x] === "+")return 0
            else if (maze[y][x] !== 0){
                if (x >= 0 && x <= iterationsX)dist = Math.min(newDepth,dist)
                
            return 0
            }
        }
        if (x < 1 || x >= iterationsX){
            if (x < 0 || x > iterationsX)return 0
            else if (maze[y][x] === "+")return 0
            else if (maze[y][x] !== 0){
                dist = Math.min(newDepth,dist)
                return 0
            }
        }
        if (maze[y][x] === "+")return 0
        if (maze[y][x] !== "," && maze[y][x] > 0){
            if (maze[y][x] <= newDepth) return 0
        }
        maze[y][x] = newDepth++

        return mazeRunner(y+1,x,newDepth) + mazeRunner(y-1,x,newDepth) + mazeRunner(y,x+1,newDepth) + mazeRunner(y,x-1,newDepth)
    }
    if (dist === Infinity)return -1
    return dist    
};
    