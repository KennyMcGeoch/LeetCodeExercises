# Write your MySQL query statement below
# Runtime: 1843 ms, faster than 49.23% of MySQL online submissions for Students and Examinations.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Students and Examinations.

SELECT student_id, student_name, subject_name, (Select Count(student_id) FROM Examinations as e WHERE a.student_id = e.student_id AND c.subject_name = e.subject_name ) AS "attended_exams" FROM Students AS a CROSS JOIN Subjects as c ORDER BY student_id, subject_name
