# Write your MySQL query statement below
# Runtime: 598 ms, faster than 24.96% of MySQL online submissions for Duplicate Emails.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Duplicate Emails.

SELECT email FROM person GROUP BY email HAVING COUNT(email) > 1;