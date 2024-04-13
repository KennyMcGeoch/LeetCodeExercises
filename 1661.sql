# Write your MySQL query statement below
# Runtime: 474 ms, faster than 44.54% of MySQL online submissions for Average Time of Process per Machine.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Average Time of Process per Machine.

SELECT machine_id, ROUND((SUM(CASE WHEN activity_type = 'end' THEN timestamp END) - SUM(CASE WHEN activity_type = 'start' THEN timestamp END))/COUNT(*) * 2,3) AS "processing_time" FROM Activity GROUP BY machine_id
