# Write your MySQL query statement below
# Runtime: 2303 ms, faster than 44.21% of MySQL online submissions for Product Sales Analysis I.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Product Sales Analysis I.

SELECT product_name, year, price FROM Sales JOIN Product using(product_id)
