
## Inner Join
```
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name=table2.column_name;
```

## IN & EXISTS
子查询表大的用`EXISTS`，子查询表小的用`IN`
```
SELECT * FROM table1 WHERE id IN (SELECT id FROM table2);

SELECT * FROM table1 WHERE EXISTS (SELECT 1 FROM table2 WHERE table1.id=table2.id);
```

## AS
