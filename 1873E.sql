# Write your MySQL query statement below
# Runtime: 675 ms, faster than 72.69% of MySQL online submissions for Calculate Special Bonus.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Calculate Special Bonus.

SELECT employee_id, IF (employee_id % 2 = 1 AND name NOT LIKE 'M%', salary, 0) as bonus FROM Employees ORDER BY employee_id