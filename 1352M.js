
var ProductOfNumbers = function() {
    this.arr = [1]
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (num === 0) this.arr = [1]
    else this.arr.push(this.arr[this.arr.length-1]*num)
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (k >= this.arr.length) return 0
    else return this.arr[this.arr.length-1] / this.arr[this.arr.length-(k+1)]
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * ProductOfNumbers obj = new ProductOfNumbers();
 * obj.add(num);
 * int param_2 = obj.getProduct(k);
 * Runtime 40ms Beats 97.50%
 * Memory 76.70MB Beats 87.50%
 */