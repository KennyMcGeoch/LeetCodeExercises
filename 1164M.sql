# Write your MySQL query statement below
# Runtime: 926 ms, faster than 56.43% of MySQL online submissions for Product Price at a Given Date.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Product Price at a Given Date.

SELECT product_id, new_price AS "price" FROM Products WHERE (product_id,change_date) IN 
(SELECT product_id, MAX(change_date) AS DATE FROM Products WHERE change_date <'2019-08-17' GROUP BY product_id)
UNION
SELECT DISTINCT product_id, 10 AS "price" FROM Products WHERE product_id NOT IN 
(SELECT product_id FROM Products WHERE change_date <'2019-08-17')