# Write your MySQL query statement below
# Runtime: 2669 ms, faster than 46.54% of MySQL online submissions for Customer Who Visited but Did Not Make Any Transactions.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Customer Who Visited but Did Not Make Any Transactions.

SELECT customer_id, COUNT(*) as "count_no_trans" FROM Visits LEFT JOIN Transactions as b USING(visit_id) WHERE b.transaction_id IS NULL GROUP BY customer_id
