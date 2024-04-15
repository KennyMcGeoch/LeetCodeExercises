# Write your MySQL query statement below
# Runtime: 1170 ms, faster than 29.83% of MySQL online submissions for Consecutive Numbers.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Consecutive Numbers.

SELECT DISTINCT a.num AS "ConsecutiveNums" FROM Logs AS a JOIN Logs AS b ON a.id = b.id-1 JOIN Logs AS c ON b.id = c.id-1 WHERE a.num = b.num AND b.num = c.num 
