# Write your MySQL query statement below
# Runtime: 2039 ms, faster than 37.30% of MySQL online submissions for Percentage of Users Attended a Contest.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Percentage of Users Attended a Contest.

SELECT contest_id, ROUND(COUNT(*)/(SELECT COUNT(user_id) FROM Users)*100,2) AS "percentage" FROM Users JOIN Register USING(user_id) GROUP BY contest_id ORDER BY percentage DESC, contest_id
