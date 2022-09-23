# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
# Runtime: 1958 ms, faster than 5.01% of MySQL online submissions for Delete Duplicate Emails.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Delete Duplicate Emails.

DELETE tb1 FROM Person AS tb1, Person AS tb2 WHERE tb1.email = tb2.email AND tb1.id > tb2.id;
