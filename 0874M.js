/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 * Runtime: 187 ms, faster than 14.28% of JavaScript online submissions for Walking Robot Simulation.
 * Memory Usage: 77.4 MB, less than 7.14% of JavaScript online submissions for Walking Robot Simulation.
 */
var robotSim = function(commands, obstacles) {
    
    let obObj = {}
    for (let i=0; i<obstacles.length; i++) obObj[obstacles[i]] = true
    let dir = 0
    let max = 0
    let x = 0
    let y = 0
    
    for (let i=0; i<commands.length; i++){
        if (commands[i] === -2){
            dir += 3
            dir %= 4
        }
        else if (commands[i] === -1){
            dir += 1
            dir %= 4
        }
        else if (dir === 0){
            walkN(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
        else if (dir === 1){
            walkE(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
        else if (dir === 2){
            walkS(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
        else {
            walkW(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
    }
    
    function walkN(dist){
        while(dist-- > 0){
            if (obObj[`${y},${x+1}`]) return
            else x++
        }
        return        
    }
    function walkE(dist){
        while(dist-- > 0){
            if (obObj[`${y+1},${x}`]) return
            else y++
        }
        return        
    }
    function walkW(dist){
        while(dist-- > 0){
            if (obObj[`${y-1},${x}`]) return
            else y--
        }
        return        
    }
    function walkS(dist){
        while(dist-- > 0){
            if (obObj[`${y},${x-1}`]) return
            else x--
        }
        return        
    }
    
    return max
    
};

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 * Runtime: 254 ms, faster than 7.14% of JavaScript online submissions for Walking Robot Simulation.
 * Memory Usage: 79.3 MB, less than 7.14% of JavaScript online submissions for Walking Robot Simulation.
 */
var robotSim = function(commands, obstacles) {
    
    let obObj = {}
    for (let i=0; i<obstacles.length; i++) obObj[[obstacles[i]]] = true
    let dir = 0
    let max = 0
    let x = 0
    let y = 0
    
    for (let i=0; i<commands.length; i++){
        if (commands[i] === -2){
            dir += 3
            dir %= 4
        }
        else if (commands[i] === -1){
            dir += 1
            dir %= 4
        }
        else if (dir === 0){
            walkN(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
        else if (dir === 1){
            walkE(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
        else if (dir === 2){
            walkS(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
        else {
            walkW(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
    }
    
    function walkN(dist){
        while(dist-- > 0){
            if (obObj[[y,x+1]]) return
            else x++
        }
        return        
    }
    function walkE(dist){
        while(dist-- > 0){
            if (obObj[[y+1,x]]) return
            else y++
        }
        return        
    }
    function walkW(dist){
        while(dist-- > 0){
            if (obObj[[y-1,x]]) return
            else y--
        }
        return        
    }
    function walkS(dist){
        while(dist-- > 0){
            if (obObj[[y,x-1]]) return
            else x--
        }
        return        
    }
    
    return max
    
};

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 * Runtime: 90 ms, faster than 100.00% of JavaScript online submissions for Walking Robot Simulation.
 * Memory Usage: 61.3 MB, less than 90.48% of JavaScript online submissions for Walking Robot Simulation.
 */
var robotSim = function(commands, obstacles) {
    
    let obObj = new Set()
    for (let i=0; i<obstacles.length; i++) obObj.add(`${obstacles[i][0]},${obstacles[i][1]}`)
    let dir = 0
    let max = 0
    let x = 0
    let y = 0
    
    for (let i=0; i<commands.length; i++){
        if (commands[i] === -2){
            dir += 3
            dir %= 4
        }
        else if (commands[i] === -1){
            dir += 1
            dir %= 4
        }
        else if (dir === 0){
            walkN(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
        else if (dir === 1){
            walkE(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
        else if (dir === 2){
            walkS(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
        else {
            walkW(commands[i])
            max = Math.max(max, x**2 + y**2)
        }
    }
    
    function walkN(dist){
        while(dist-- > 0){
            if (obObj.has(`${y},${x+1}`)) return
            else x++
        }
        return        
    }
    function walkE(dist){
        while(dist-- > 0){
            if (obObj.has(`${y+1},${x}`)) return
            else y++
        }
        return        
    }
    function walkW(dist){
        while(dist-- > 0){
            if (obObj.has(`${y-1},${x}`)) return
            else y--
        }
        return        
    }
    function walkS(dist){
        while(dist-- > 0){
            if (obObj.has(`${y},${x-1}`)) return
            else x--
        }
        return        
    }
    
    return max
    
};