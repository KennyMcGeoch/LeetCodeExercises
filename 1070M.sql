# Write your MySQL query statement below
# Runtime: 2220 ms, faster than 25.24% of MySQL online submissions for Product Sales Analysis III.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Product Sales Analysis III.

SELECT product_id, year AS "first_year", quantity, price FROM Sales WHERE (product_id, year) IN (SELECT product_id, MIN(year) FROM Sales GROUP BY product_id)