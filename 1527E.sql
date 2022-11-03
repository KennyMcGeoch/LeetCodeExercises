# Write your MySQL query statement below
# Runtime: 316 ms, faster than 86.70% of MySQL online submissions for Patients With a Condition.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Patients With a Condition.

SELECT * FROM Patients WHERE conditions LIKE '% DIAB1%' OR conditions LIKE 'DIAB1%'