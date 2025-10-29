/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 * Runtime 67ms Beats 93.75%
 * Memory 67.39MB Beats75.00%
 */
var maximumEnergy = function(energy, k) {
    for (let i=energy.length-1; i >=k; i--) energy[i-k] += energy[i]

    return Math.max(...energy)
};