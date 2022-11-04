# Write your MySQL query statement below
# Runtime: 1010 ms, faster than 19.71% of MySQL online submissions for Employees With Missing Information.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Employees With Missing Information.

SELECT T.employee_id
FROM  
  (SELECT * FROM Employees LEFT JOIN Salaries USING(employee_id)
   UNION 
   SELECT * FROM Employees RIGHT JOIN Salaries USING(employee_id))
AS T
WHERE T.salary IS NULL OR T.name IS NULL
ORDER BY employee_id;
