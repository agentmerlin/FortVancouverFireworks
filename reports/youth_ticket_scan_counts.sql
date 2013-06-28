SELECT ticket_id, COUNT(*) as scan_count
FROM errors
WHERE status LIKE '%YOUTH%'
GROUP BY ticket_id;