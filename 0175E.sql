# Write your MySQL query statement below
# Runtime: 374 ms, faster than 83.54% of MySQL online submissions for Combine Two Tables.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Combine Two Tables.

SELECT firstName, lastName, city, state FROM Person LEFT OUTER JOIN Address ON Person.personId = Address.personId;