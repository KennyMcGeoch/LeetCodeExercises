# Write your MySQL query statement below
# Runtime: 1987 ms, faster than 85.90% of MySQL online submissions for Replace Employee ID With The Unique Identifier.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Replace Employee ID With The Unique Identifier.

SELECT unique_id, name FROM Employees LEFT JOIN EmployeeUNI USING(id)
