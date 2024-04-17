# Write your MySQL query statement below
# Runtime: 510 ms, faster than 99.73% of MySQL online submissions for Employees Whose Manager Left the Company.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Employees Whose Manager Left the Company.

SELECT a.employee_id FROM Employees AS a LEFT JOIN Employees AS b ON a.manager_id = b.employee_id  
WHERE a.salary < 30000 AND b.employee_id IS NULL AND a.manager_id IS NOT NULL
ORDER BY employee_id
