# Write your MySQL query statement below
# Runtime: 386 ms, faster than 44.54% of MySQL online submissions for Big Countries.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Big Countries.

SELECT name, population, area FROM World WHERE area > 2999999 or population > 24999999;