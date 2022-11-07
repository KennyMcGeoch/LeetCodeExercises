# Write your MySQL query statement below
# Runtime: 591 ms, faster than 49.91% of MySQL online submissions for Article Views I.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Article Views I.

SELECT DISTINCT author_id as id FROM Views WHERE author_id = viewer_id ORDER BY id
