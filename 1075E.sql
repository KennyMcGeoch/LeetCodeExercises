# Write your MySQL query statement below
# Runtime: 1584 ms, faster than 8.54% of MySQL online submissions for Project Employees I.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Project Employees I.

SELECT project_id, ROUND(AVG(experience_years),2) AS "average_years" FROM Project JOIN Employee USING(employee_id) GROUP BY project_id
