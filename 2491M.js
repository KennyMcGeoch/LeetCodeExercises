/**
 * @param {number[]} skill
 * @return {number}
 * Runtime: 114 ms, faster than 69.74% of JavaScript online submissions for Divide Players Into Teams of Equal Skill.
 * Memory Usage: 59.1 MB, less than 68.42% of JavaScript online submissions for Divide Players Into Teams of Equal Skill.
 */
var dividePlayers = function(skill) {
    skill.sort((a,b)=>a-b)
    let left = 0
    let right = skill.length-1
    let av = skill[left] + skill[right]
    let total = skill[left++] * skill[right--]
    while (left < right){
        if (skill[left] + skill[right] !== av) return -1
        else total += (skill[left++] * skill[right--])
    }
    return total
};