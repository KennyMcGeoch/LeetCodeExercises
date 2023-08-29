/**
 * @param {string} customers
 * @return {number}
 * Runtime: 51 ms, faster than 100.00% of JavaScript online submissions for Minimum Penalty for a Shop.
 * Memory Usage: 44.5 MB, less than 84.31% of JavaScript online submissions for Minimum Penalty for a Shop.
 */
var bestClosingTime = function(customers) {
    let total = 0
    let min = 0
    let time = customers.length
    let loops = time - 1
    
    for (let i=loops; i>-1; i--){
        if (customers[i] === 'Y') total++
        else{
            total--
                if (total <= min){
                min = total
                time = i
            }
        } 
        
    }
    
    return time
    
};