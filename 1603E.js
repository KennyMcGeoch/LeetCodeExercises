/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 * Runtime: 138 ms, faster than 92.97% of JavaScript online submissions for Design Parking System.
 * Memory Usage: 49.3 MB, less than 89.34% of JavaScript online submissions for Design Parking System.
 */

 var ParkingSystem = function(big, medium, small) {
    this.spaces = [0,big,medium,small] 
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if (this.spaces[carType] > 0){
        this.spaces[carType]--
        return true
    }
    else{
        return false
    }

    
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */