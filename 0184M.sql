# Write your MySQL query statement below
# Runtime: 798 ms, faster than 45.64% of MySQL online submissions for Department Highest Salary.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Department Highest Salary.

SELECT Department.name AS 'Department', Employee.name AS 'Employee', Employee.salary as 'Salary' FROM Employee JOIN Department ON Employee.departmentId = Department.id WHERE (Employee.departmentId, Employee.salary) IN(SELECT departmentId, MAX(salary) FROM Employee GROUP BY departmentID)