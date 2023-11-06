/**
 * @param {number} n
 */
var SeatManager = function(n) {
    
    this.min = [1]
    this.order = true
    
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    if (this.min.length > 1){
        if (this.order === false){
            this.min.sort((a,b)=>b-a)
            this.order = true
        }
        return this.min.pop()
    }
    else{
        return this.min[0]++
    }
    
    
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    if (seatNumber > this.min[this.min.length-1])this.order = false
    this.min.push(seatNumber)
    
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 * Runtime: 458 ms, faster than 89.58% of JavaScript online submissions for Seat Reservation Manager.
Memory Usage: 109.9 MB, less than 95.83% of JavaScript online submissions for Seat Reservation Manager.
 */