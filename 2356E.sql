# Write your MySQL query statement below
# Runtime: 1086 ms, faster than 37.46% of MySQL online submissions for Number of Unique Subjects Taught by Each Teacher.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Number of Unique Subjects Taught by Each Teacher.

SELECT teacher_id, COUNT(DISTINCT subject_id) AS "cnt" FROM Teacher GROUP BY teacher_id
