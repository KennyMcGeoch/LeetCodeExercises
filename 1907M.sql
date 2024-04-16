# Write your MySQL query statement below
# Runtime: 2795 ms, faster than 42.47% of MySQL online submissions for Count Salary Categories.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Count Salary Categories.

SELECT "Low Salary" AS category, COUNT(CASE WHEN income < 20000 THEN 1 ELSE NULL END) AS "accounts_count" FROM Accounts
UNION ALL
SELECT "Average Salary" AS category, COUNT(CASE WHEN income BETWEEN 20000 AND 50000 THEN 1 ELSE NULL END) AS "accounts_count" FROM Accounts
UNION ALL
SELECT "High Salary" AS category, COUNT(CASE WHEN income > 50000 THEN 1 ELSE NULL END) AS "accounts_count" FROM Accounts
