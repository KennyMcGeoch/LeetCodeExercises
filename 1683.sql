# Write your MySQL query statement below
# Runtime: 1045 ms, faster than 75.58% of MySQL online submissions for Invalid Tweets.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Invalid Tweets.

SELECT tweet_id FROM tweets WHERE LENGTH(content) > 15