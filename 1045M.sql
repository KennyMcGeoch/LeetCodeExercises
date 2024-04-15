# Write your MySQL query statement below
# Runtime: 1228 ms, faster than 36.50% of MySQL online submissions for Customers Who Bought All Products.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Customers Who Bought All Products.

SELECT customer_id FROM Customer GROUP BY customer_id HAVING COUNT(DISTINCT product_key) = (SELECT COUNT(*) FROM Product)