## global setup
```shell
git config --global user.name "keqingrong"
git config --global user.email "keqingrong1992@gmail.com"
```

## create a new repository
```shell
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:<username>/<repository>.git
git push -u origin master
```

## push an existing repository
```shell
git remote add origin git@github.com:<username>/<repository>.git
git push -u origin master
```
