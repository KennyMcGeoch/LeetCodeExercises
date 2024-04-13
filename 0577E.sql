# Write your MySQL query statement below
# Runtime: 1624 ms, faster than 87.36% of MySQL online submissions for Employee Bonus.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Employee Bonus.

SELECT name, bonus FROM Employee LEFT JOIN Bonus USING(empId) WHERE bonus < 1000 OR bonus IS NULL
