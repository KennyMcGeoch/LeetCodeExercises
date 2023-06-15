class Calculator {
  
    /** 
     * @param {number} value
     * Runtime: 55 ms, faster than 74.72% of JavaScript online submissions for Calculator with Method Chaining.
     * Memory Usage: 41.6 MB, less than 79.52% of JavaScript online submissions for Calculator with Method Chaining.
     */
    constructor(value) {
      this.val = value
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.val += value
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.val -= value
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.val *= value
    }
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) throw Error("Division by zero is not allowed")
        this.val /= value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.val **= value
    }
      
    /** 
     * @return {number}
     */
    getResult() {
      return this.val
    }
  }