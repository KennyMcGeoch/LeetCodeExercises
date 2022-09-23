# Write your MySQL query statement below
# Runtime: 629 ms, faster than 41.56% of MySQL online submissions for Customers Who Never Order.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Customers Who Never Order.

SELECT Customers.name AS 'Customers' FROM Customers LEFT OUTER JOIN Orders ON Customers.id = Orders.customerId WHERE Orders.id IS NULL