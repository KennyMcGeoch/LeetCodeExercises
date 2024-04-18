# Write your MySQL query statement below
# Runtime: 747 ms, faster than 98.80% of MySQL online submissions for Investments in 2016.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Investments in 2016.

WITH 
    uniq AS (
    SELECT * FROM Insurance GROUP BY lat,lon HAVING COUNT(*) = 1
),
    same AS (
    SELECT tiv_2015 FROM Insurance GROUP BY tiv_2015 HAVING COUNT(*) > 1
)

SELECT ROUND(SUM(tiv_2016),2) AS "tiv_2016" FROM same JOIN uniq USING(tiv_2015)


