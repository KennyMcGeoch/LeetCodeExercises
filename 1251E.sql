# Write your MySQL query statement below
# Runtime: 1447 ms, faster than 60.97% of MySQL online submissions for Average Selling Price.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Average Selling Price.

SELECT a.product_id, ROUND(SUM(CASE WHEN b.units IS NULL THEN 0 ELSE(a.price * b.units )/(SELECT SUM(units) FROM UnitsSold AS c WHERE a.product_id = c.product_id)END),2) AS "average_price" FROM Prices AS a LEFT JOIN UnitsSold AS b ON (a.product_id = b.product_id AND b.purchase_date >= a.start_date AND b.purchase_date <= a.end_date) GROUP BY a.product_id
