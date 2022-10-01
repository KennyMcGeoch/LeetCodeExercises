/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
 var canReach = function(s, minJump, maxJump) {
    const n = s.length;
    let reachables = [0]; 
    
    for (let i = 1; i < n; ++i) {
        const bit = s[i];

        if (bit === "1") continue; 

        while (reachables.length > 0 && i - reachables[0] > maxJump) { 
            reachables.shift();
        }

        if (reachables.length === 0) return false; 

        if (i - reachables[0] < minJump) continue; 
		reachables.push(i);
    }
   
    const reached = reachables.pop();
    
    return reached === n - 1; 
};

canReach("0101001101010101000000000000000000000000000000000000000000000000000000000000000",1,10)