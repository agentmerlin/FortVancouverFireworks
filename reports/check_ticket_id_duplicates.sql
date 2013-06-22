SELECT A.ticket_id
FROM ticket as A
WHERE EXISTS (SELECT B.ticket_id
   FROM ticket as B
   WHERE A.ticket_id = B.ticket_id)