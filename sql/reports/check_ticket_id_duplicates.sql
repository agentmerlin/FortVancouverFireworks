SELECT ticket_id
FROM ticket
GROUP BY ticket_id
HAVING COUNT(ticket_id) > 1;