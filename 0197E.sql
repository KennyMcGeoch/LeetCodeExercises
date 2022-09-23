# Write your MySQL query statement below
# Runtime: 940 ms, faster than 21.07% of MySQL online submissions for Rising Temperature.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Rising Temperature.

SELECT a.id FROM Weather AS a, Weather AS b WHERE a.temperature > b.temperature AND DATEDIFF(a.recordDate, b.recordDate) = 1;
