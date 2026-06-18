/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.08MB Beats 80.65%
 */
var angleClock = function(hour, minutes) {
    hour *= 30
    hour += (minutes/2)
    minutes *= 6

    return Math.min(Math.abs(minutes-hour), 360-Math.abs(minutes-hour))
};