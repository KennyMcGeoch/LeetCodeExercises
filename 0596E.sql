# Write your MySQL query statement below
# Runtime: 317 ms, faster than 71.96% of MySQL online submissions for Classes More Than 5 Students.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Classes More Than 5 Students.

SELECT class FROM Courses GROUP BY class HAVING COUNT(class) > 4;