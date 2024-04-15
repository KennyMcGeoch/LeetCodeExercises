# Write your MySQL query statement below
# Runtime: 783 ms, faster than 37.30% of MySQL online submissions for Queries Quality and Percentage.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Queries Quality and Percentage.

SELECT query_name, ROUND(AVG(rating/position),2) AS "quality", ROUND(COUNT(CASE WHEN rating < 3 THEN 1 END)/(SELECT COUNT(query_name)FROM Queries AS b WHERE a.query_name = b.query_name)*100,2) AS "poor_query_percentage" FROM Queries AS a GROUP BY query_name HAVING query_name IS NOT NULL
