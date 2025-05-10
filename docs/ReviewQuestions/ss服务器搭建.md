# 搭建SS(Shadowsocks)服务器

> 最近因为有一台香港的阿里云轻量级应用服务器,而且流量给的很多,于是我决定在自己的vps上搭建自己的翻墙服务器.
>
> 以下是我的教程

## 购买服务器

首先,前往阿里云官网购买一台服务器,必须购买境外的服务器,优先考虑香港,或者新加坡的服务器,延迟还有tacket都比较出色.

阿里云官网:`https://aliyun.com`

这里，我以Linux距离，安装宝塔面板后再进行相关操作

```bash
if [ -f /usr/bin/curl ];then curl -sSO https://download.bt.cn/install/install_panel.sh;else wget -O install_panel.sh https://download.bt.cn/install/install_panel.sh;fi;bash install_panel.sh ed8484bec
```

这是安装Linux宝塔面板的官方命令，按照默认进行相关操作就行了。

然后，我们安装完之后，安装Python的环境，最好是最新版的，因为后续如果我们要进行其他功能的开发的时候也是比较方便。

这里我以最新版3.11版的举例，但我们安装完后

```python
sudo dnf install epel-release -y
sudo dnf install python3 python3-pip -y
```

安装必要的依赖

然后安装`Shadowsocks`的python包
```python
pip3 install --upgrade pip
pip3 install shadowsocks
```

然后在/etc/shadowsocks中执行这个

```bash
sudo nano /etc/shadowsocks.json
```

这个文件下可以这样配置

```json
{
    "server": "0.0.0.0",
    "server_port": 8388,
    "password": "your_password",
    "method": "aes-256-gcm",
    "timeout": 300
}
```

启动命令
```python
ssserver -c /etc/shadowsocks.json -d start
```