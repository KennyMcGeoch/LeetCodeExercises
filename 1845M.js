/**
 * @param {number} n
 */
var SeatManager = function(n) {
    
    this.min = [1]
    
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    if (this.min.length > 1){
        this.min.sort((a,b)=>b-a)
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
    this.min.push(seatNumber)
    
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 * Runtime: 529 ms, faster than 70.83% of JavaScript online submissions for Seat Reservation Manager.
 * Memory Usage: 116.1 MB, less than 43.75% of JavaScript online submissions for Seat Reservation Manager.
 */