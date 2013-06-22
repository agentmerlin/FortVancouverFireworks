SELECT E.*, T.gate_id as original_gate, T.scan_time as original_scan_time, T.full_name as original_name
FROM errors as E
LEFT JOIN ticket as T
ON T.ticket_id=E.ticket_id
ORDER BY E.scan_time ASC;