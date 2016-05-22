## Checking for existing SSH keys
```shell
ls -al ~/.ssh

-rw-------  1 keqingrong None 3247 7月  27 2015 id_rsa
-rw-r--r--  1 keqingrong None  746 7月  27 2015 id_rsa.pub
-rw-r--r--  1 keqingrong None 1612 9月  22 2015 known_hosts
```

## Generating a new SSH key
```shell
ssh-keygen -t rsa -b 4096 -C "keqingrong1992@gmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/home/keqingrong/.ssh/id_rsa):
/home/keqingrong/.ssh/id_rsa already exists.
Overwrite (y/n)? y
Enter passphrase (empty for no passphrase):
```

## Adding SSH key to the ssh-agent
```shell
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

##
```shell
clip < ~/.ssh/id_rsa.pub
```



