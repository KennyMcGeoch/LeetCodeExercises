# Write your MySQL query statement below
# Runtime: 680 ms, faster than 42.94% of MySQL online submissions for Recyclable and Low Fat Products.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Recyclable and Low Fat Products.

SELECT product_id FROM Products WHERE low_fats = "Y" && recyclable = "Y"
