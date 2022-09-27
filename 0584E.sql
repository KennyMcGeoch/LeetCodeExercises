# Write your MySQL query statement below
# Runtime: 824 ms, faster than 22.15% of MySQL online submissions for Find Customer Referee.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Find Customer Referee.

SELECT name FROM Customer WHERE referee_id != "2" or referee_id IS NULL;