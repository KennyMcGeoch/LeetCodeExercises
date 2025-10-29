/**
 * @param {number[]} balance
 * Runtime 30ms Beats57.69%
 * Memory 89.98MB Beats 37.82%
 */
var Bank = function(balance) {
    arr = balance
    arr.unshift(0)
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (account1 >= arr.length || money > arr[account1] || account2 >= arr.length) return false
    arr[account2] += money
    arr[account1] -= money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if (account >= arr.length) return false
    arr[account] += money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if (account >= arr.length || money > arr[account]) return false
    arr[account] -= money
    return true
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */

/**
 * @param {number[]} balance
 * Runtime 20ms Beats 99.36%
 * Memory 85.93MB Beats 83.33%
 */
var Bank = function(balance) {
    arr = balance
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (--account1 >= arr.length || money > arr[account1] || --account2 >= arr.length) return false
    arr[account2] += money
    arr[account1] -= money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if (--account >= arr.length) return false
    arr[account] += money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if (--account >= arr.length || money > arr[account]) return false
    arr[account] -= money
    return true
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */