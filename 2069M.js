/**
 * @param {number} width
 * @param {number} height
 * Runtime 43ms Beats 100.00%
 * Memory 69.10MB Beats 100.00%
 */
var Robot = function(width, height) {
    perim = width + width + height + height - 4
    curr = 0
    wid = width -1
    hei = height -1
    moved = false
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
    curr += num
    curr %= perim
    moved = true
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    if (curr < wid) return [curr,0]
    if (curr < wid + hei) return [wid, curr - (wid) ]
    if (curr < wid + hei + wid) return [(hei + wid + wid) - curr,hei]
    return [0, perim-curr]
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    if (curr === 0 && moved) return "South"
    if (curr <= wid) return "East"
    if (curr <= wid + hei) return "North"
    if (curr <= wid + hei + wid) return "West"
    return "South"
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */