/**
 * @param {number[]} bills
 * @return {boolean}
 * Runtime: 69 ms, faster than 77.41% of JavaScript online submissions for Lemonade Change.
 * Memory Usage: 57.3 MB, less than 93.91% of JavaScript online submissions for Lemonade Change.
 */
var lemonadeChange = function(bills) {
    let change = [0,0]
    
    for (let i=0; i<bills.length; i++){
        if (bills[i] === 5) change[0]++
        else if (bills[i] === 10){
            change[1]++
            if (--change[0] < 0) return false
        }
        else if (change[1] > 0){
            change[1]--
            if (--change[0] < 0) return false
        }
        else {
            change[0] -= 3
            if (change[0] < 0) return false
        }
    }
    
    return true
    
};

/**
 * @param {number[]} bills
 * @return {boolean}
 * Runtime: 60 ms, faster than 96.45% of JavaScript online submissions for Lemonade Change.
 * Memory Usage: 57.2 MB, less than 96.45% of JavaScript online submissions for Lemonade Change.
 */
var lemonadeChange = function(bills) {
    let five = 0
    let ten = 0
    
    for (let i=0; i<bills.length; i++){
        if (bills[i] === 5) five++
        else if (bills[i] === 10){
            ten++
            if (--five < 0) return false
        }
        else if (ten > 0){
            ten--
            if (--five < 0) return false
        }
        else {
            five -= 3
            if (five < 0) return false
        }
    }
    
    return true
    
};