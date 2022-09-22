# Write your MySQL query statement below
#Runtime: 375 ms, faster than 81.60% of MySQL online submissions for Employees Earning More Than Their Managers.
#Memory Usage: 0B, less than 100.00% of MySQL online submissions for Employees Earning More Than Their Managers.

SELECT a.Name AS Employee FROM Employee AS a JOIN Employee AS b ON a.ManagerId = b.id AND a.Salary > b.Salary;