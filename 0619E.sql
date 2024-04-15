# Write your MySQL query statement below
# Runtime: 1132 ms, faster than 10.97% of MySQL online submissions for Biggest Single Number.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Biggest Single Number.

SELECT MAX(num) AS "num" FROM (SELECT num FROM MyNumbers GROUP BY num HAVING COUNT(num) < 2 ) NEW