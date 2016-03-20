# Install fonts on Ubuntu

## for a single user
```shell
wget https://noto-website-2.storage.googleapis.com/pkgs/Noto-hinted.zip
unzip Noto-hinted.zip
cd Noto-hinted/
mkdir -p ~/.fonts/noto
cp *otf ~/.fonts/noto
fc-cache -f -v # optional
```

## for all users
```shell
sudo mkdir -p /usr/share/fonts/opentype/noto
sudo cp *otf /usr/share/fonts/opentype/noto
sudo fc-cache -f -v # optional
```

## Note
在Linux和Windows上应该使用微调过(hinted)的字体，在OS X上使用没有微调(unhinted)的字体。
