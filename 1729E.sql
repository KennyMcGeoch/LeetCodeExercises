# Write your MySQL query statement below
# Runtime: 1175 ms, faster than 37.12% of MySQL online submissions for Find Followers Count.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Find Followers Count.

SELECT user_id, COUNT(user_id) AS "followers_count" FROM Followers GROUP BY user_id ORDER BY user_id
