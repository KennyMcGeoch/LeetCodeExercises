/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 * Runtime: 60 ms, faster than 83.70% of JavaScript online submissions for Grumpy Bookstore Owner.
 * Memory Usage: 51.5 MB, less than 75.00% of JavaScript online submissions for Grumpy Bookstore Owner.
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    
    if (minutes === grumpy.length) return customers.reduce((a,b)=>a+b)
    
    let ans = 0
    
    for (let i=0; i<grumpy.length; i++){
        if (grumpy[i] === 0){
            ans += customers[i]
            customers[i] = 0
        }
    }
    
    let max = 0
    for (let i=0; i<minutes; i++) max += customers[i]
    let wind = max
    for (let i=minutes; i<grumpy.length; i++){
        wind -= customers[i-minutes]
        wind += customers[i]
        max = Math.max(max,wind)
    }
    
    return ans+max
    
};

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 * Runtime: 53 ms, faster than 97.83% of JavaScript online submissions for Grumpy Bookstore Owner.
 * Memory Usage: 51.7 MB, less than 63.04% of JavaScript online submissions for Grumpy Bookstore Owner.
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    
    //if (minutes === grumpy.length) return customers.reduce((a,b)=>a+b)
    
    let ans = 0
    
    for (let i=0; i<grumpy.length; i++){
        if (grumpy[i] === 0){
            ans += customers[i]
            customers[i] = 0
        }
    }
    
    let max = 0
    for (let i=0; i<minutes; i++) max += customers[i]
    let wind = max
    for (let i=minutes; i<grumpy.length; i++){
        wind -= customers[i-minutes]
        wind += customers[i]
        max = Math.max(max,wind)
    }
    
    return ans+max
    
};

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 * Runtime: 46 ms, faster than 98.91% of JavaScript online submissions for Grumpy Bookstore Owner.
 * Memory Usage: 51.2 MB, less than 94.57% of JavaScript online submissions for Grumpy Bookstore Owner.
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    
    let ans = 0
    let wind = 0
    
    for (let i=0; i<minutes; i++){
        if (grumpy[i] === 0){
            ans += customers[i]
            customers[i] = 0
        }
        else wind += customers[i]
    }
    
    let max = wind
    
    for (let i=minutes; i<grumpy.length; i++){
        if (grumpy[i] === 0){
            ans += customers[i]
            customers[i] = 0
            wind -= customers[i-minutes]
        }
        else{
            wind += customers[i]
            wind -= customers[i-minutes]
            max = Math.max(wind,max)
        }
    }
    
    return ans+max
    
};