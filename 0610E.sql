# Write your MySQL query statement below
# Runtime: 783 ms, faster than 9.93% of MySQL online submissions for Triangle Judgement.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Triangle Judgement.

SELECT x,y,z, IF(x+y > z AND y+z > x AND x+z > y, 'Yes', 'No') AS "triangle" FROM Triangle
