# Write your MySQL query statement below
# Runtime: 1361 ms, faster than 34.34% of MySQL online submissions for The Number of Employees Which Report to Each Employee.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for The Number of Employees Which Report to Each Employee.

SELECT b.employee_id, b.name, COUNT(*) AS "reports_count", ROUND(AVG(a.age),0) AS "average_age" FROM Employees AS b JOIN Employees AS a ON a.reports_to = b.employee_id GROUP BY b.employee_id, b.name ORDER BY b.employee_id