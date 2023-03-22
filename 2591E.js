/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 * Runtime: 130 ms, faster than 26.13% of JavaScript online submissions for Distribute Money to Maximum Children.
 * Memory Usage: 46.2 MB, less than 72.07% of JavaScript online submissions for Distribute Money to Maximum Children.
 */
var distMoney = function(money, children) {

    let answer = 0
    
    while(money > 7 && children < money - 6 && children > 1){
        answer++
        children--
        money -= 8
    }
    if (money === 4 && children === 1)answer--
    if (money === 8 && children === 1)answer++
    if (children > money) return -1
    
    
    return answer
    
};