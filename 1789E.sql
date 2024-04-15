# Write your MySQL query statement below
# Runtime: 1316 ms, faster than 22.92% of MySQL online submissions for Primary Department for Each Employee.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Primary Department for Each Employee.

SELECT employee_id, department_id FROM Employee WHERE primary_flag = 'Y' OR employee_id IN
(SELECT employee_id FROM Employee GROUP BY employee_id HAVING COUNT(employee_id) = 1)

# Write your MySQL query statement below
# Runtime: 1094 ms, faster than 52.35% of MySQL online submissions for Primary Department for Each Employee.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Primary Department for Each Employee.

SELECT employee_id, department_id FROM Employee WHERE primary_flag = 'Y' UNION SELECT employee_id, department_id FROM Employee GROUP BY employee_id HAVING COUNT(employee_id) = 1
