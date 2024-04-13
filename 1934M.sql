# Write your MySQL query statement below
# Runtime: 2602 ms, faster than 5.03% of MySQL online submissions for Confirmation Rate.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Confirmation Rate.

SELECT a.user_id, ROUND(COUNT(CASE WHEN action = 'confirmed' THEN 1 ELSE NULL END)/COUNT(*),2) AS "confirmation_rate" FROM Signups AS a LEFT JOIN Confirmations AS b USING(user_id) GROUP BY a.user_id
