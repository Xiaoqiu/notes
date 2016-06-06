
## 切换RubyGems源
```shell
$ gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org
# 请确保只有 ruby.taobao.org
$ gem install rails
```

gem sources --add https://rubygems.org/ --remove https://ruby.taobao.org/
