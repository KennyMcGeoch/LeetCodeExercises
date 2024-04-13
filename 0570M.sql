# Write your MySQL query statement below
# Runtime: 650 ms, faster than 59.31% of MySQL online submissions for Managers with at Least 5 Direct Reports.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Managers with at Least 5 Direct Reports.

SELECT b.name FROM Employee AS a JOIN Employee AS b ON a.managerId = b.id GROUP BY b.id HAVING COUNT(b.id) > 4
