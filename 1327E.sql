# Write your MySQL query statement below
# Runtime: 1352 ms, faster than 67.33% of MySQL online submissions for List the Products Ordered in a Period.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for List the Products Ordered in a Period.

WITH validDate AS (
SELECT * FROM Orders WHERE order_date >= '2020-02-01' AND order_date < '2020-03-01'
)

SELECT product_name, SUM(unit) AS unit FROM validDate JOIN Products USING(product_id) GROUP BY product_id HAVING SUM(unit) > 99
