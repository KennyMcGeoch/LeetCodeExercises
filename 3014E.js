/**
 * @param {string} word
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.61MB Beats 80.00%
 */
var minimumPushes = function(word) {
  if (word.length < 9) return word.length
  else if (word.length < 17) return (2*word.length) - 8
  else if (word.length < 25) return (3*word.length) - 24
  else return (4*word.length) - 48  
};