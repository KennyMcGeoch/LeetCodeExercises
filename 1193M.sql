# Write your MySQL query statement below
# Runtime: 961 ms, faster than 80.46% of MySQL online submissions for Monthly Transactions I.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Monthly Transactions I.

SELECT SUBSTRING(trans_date,1,7) AS "month", country, COUNT(*) AS "trans_count", COUNT(CASE WHEN state = "approved" THEN 1 END) AS "approved_count", SUM(amount) AS "trans_total_amount", SUM(CASE WHEN state = "approved" THEN amount ELSE 0 END) AS "approved_total_amount" FROM Transactions GROUP BY month, country
