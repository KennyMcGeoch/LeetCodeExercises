# Write your MySQL query statement below
# Runtime: 451 ms, faster than 77.06% of MySQL online submissions for Second Highest Salary.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Second Highest Salary.

SELECT(SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 1) AS "SecondHighestSalary"
