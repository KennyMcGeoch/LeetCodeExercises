# Write your MySQL query statement below
# Runtime: 226 ms, faster than 86.11% of MySQL online submissions for Swap Salary.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Swap Salary.

UPDATE Salary SET sex = CASE sex WHEN 'f' THEN 'm' ELSE 'f' END;