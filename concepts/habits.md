## Write conditions about the fact you need now, not the event that usually causes it
**Example (Build 1, Accordion):** In single-open mode, clicking an item after
"Expand all" should keep only that item open. I checked "are all items open?"
(thinking of the Expand all *event*). But with **one** item, a normal click also
makes "all open" true, so that item could never close.
The fact I actually needed: "are **other** items open besides this one?"
→ `prevIds.length > 1`.