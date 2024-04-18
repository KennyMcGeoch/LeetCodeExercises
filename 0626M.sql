# Write your MySQL query statement below
# Runtime: 590 ms, faster than 86.88% of MySQL online submissions for Exchange Seats.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Exchange Seats.

SELECT id, 
CASE WHEN id %2 = 0 THEN LAG(student) OVER(ORDER BY id ASC)
     ELSE LEAD(student,1,student) OVER(ORDER BY id ASC) 
     END AS "student"  FROM Seat