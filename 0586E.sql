# Write your MySQL query statement below
# Runtime: 1069 ms, faster than 32.85% of MySQL online submissions for Customer Placing the Largest Number of Orders.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Customer Placing the Largest Number of Orders.

SELECT customer_number FROM Orders GROUP BY customer_number ORDER BY COUNT(*) DESC LIMIT 1
