# Write your MySQL query statement below
# Runtime: 1430 ms, faster than 78.45% of MySQL online submissions for Last Person to Fit in the Bus.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Last Person to Fit in the Bus.

SELECT DISTINCT LAST_VALUE(person_name) OVER() AS "person_name" FROM 
(SELECT person_name, SUM(weight) OVER(ORDER BY turn) AS "Weight" FROM Queue) AS a 
WHERE a.Weight <= 1000