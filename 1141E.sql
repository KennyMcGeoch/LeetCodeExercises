# Write your MySQL query statement below
# Runtime: 819 ms, faster than 81.41% of MySQL online submissions for User Activity for the Past 30 Days I.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for User Activity for the Past 30 Days I.

SELECT activity_date AS "day", COUNT(DISTINCT user_id) AS 'active_users' FROM Activity WHERE  activity_date >= '2019-06-28' AND activity_date <= '2019-07-27' GROUP BY activity_date
