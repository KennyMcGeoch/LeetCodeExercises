# Write your MySQL query statement below
# Runtime: 2114 ms, faster than 86.61% of MySQL online submissions for Movie Rating.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Movie Rating.

(SELECT name AS "results" FROM MovieRating JOIN Users USING(user_id) 
 GROUP BY user_id, name ORDER BY COUNT(rating) DESC, name LIMIT 1)
UNION ALL
(SELECT title AS "results" FROM MovieRating JOIN Movies USING(movie_id) WHERE created_at >= '2020-02-01' AND created_at < '2020-03-01' 
 GROUP BY movie_id, title  ORDER BY AVG(rating) DESC, title LIMIT 1)