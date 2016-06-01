在mysql中新建数据库时utf8编码选择主要有：
- utf8_bin
- utf8_general_ci
- utf8_general_cs

说明：
- utf8_bin：区分大小写，将字符串中的每一个字符用二进制数据存储（按照二进制排序）；
- utf8_general_ci：不区分大小写，ci为case insensitive的缩写，即大小写不敏感（按照普通的字母顺序排序）；
- utf8_general_cs：区分大小写，cs为case sensitive的缩写，即大小写敏感（按照普通的字母顺序排序）。

MySQL的utf8字符集默认的校对集为utf8_general_ci，一般情况下，新建数据库的时候选utf8_general_ci即可，此时对数据字段中的大小写不做区分。

PS：可以进数据库查看编码
```shell
>mysql -u root -p --default-character-set=utf8（或者mysql --defaults-file="D:\MySQL\MySQL Server 5.6\my.ini" -u root -p）
>show collation like 'utf8\_%';
```
