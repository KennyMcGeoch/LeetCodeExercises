# Write your MySQL query statement below
# Runtime: 486 ms, faster than 97.13% of MySQL online submissions for Friend Requests II: Who Has the Most Friends.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Friend Requests II: Who Has the Most Friends.

WITH
 reqs AS(
 SELECT requester_id AS id FROM RequestAccepted
 UNION ALL
 SELECT accepter_id FROM RequestAccepted
 )
 
 SELECT id, COUNT(id) AS num FROM reqs GROUP BY id ORDER BY COUNT(id) DESC LIMIT 1
