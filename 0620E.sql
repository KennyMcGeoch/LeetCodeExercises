# Write your MySQL query statement below
# Runtime: 234 ms, faster than 62.81% of MySQL online submissions for Not Boring Movies.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Not Boring Movies.

SELECT * FROM Cinema WHERE id % 2 = 1 AND description != 'boring' ORDER BY rating DESC;