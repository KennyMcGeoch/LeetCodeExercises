# Write your MySQL query statement below
# Runtime: 2534 ms, faster than 5.00% of MySQL online submissions for Immediate Food Delivery II.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Immediate Food Delivery II.

SELECT round(SUM(CASE WHEN order_date=customer_pref_delivery_date THEN 1 END)*100 / COUNT(DISTINCT customer_id),2) AS "immediate_percentage" FROM Delivery WHERE (customer_id, order_date) IN (SELECT customer_id, MIN(order_date) FROM delivery GROUP BY customer_id);
