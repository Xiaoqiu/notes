# ping、tracert、pathping命令

ping (Packet Internet Groper)，因特网包探索器，用于测试网络连接情况。
```shell
用法: ping [-t] [-a] [-n count] [-l size] [-f] [-i TTL] [-v TOS]
           [-r count] [-s count] [[-j host-list] | [-k host-list]]
           [-w timeout] [-R] [-S srcaddr] [-c compartment] [-p]
           [-4] [-6] target_name

选项:
   -t             Ping 指定的主机，直到停止。
                  若要查看统计信息并继续操作，请键入 Ctrl+Break；
                  若要停止，请键入 Ctrl+C。
   -a             将地址解析为主机名。
   -n count       要发送的回显请求数。
   -l size        发送缓冲区大小。
   -f             在数据包中设置“不分段”标记(仅适用于 IPv4)。
   -i TTL         生存时间。
   -v TOS         服务类型(仅适用于 IPv4。该设置已被弃用，
                  对 IP 标头中的服务类型字段没有任何
                  影响)。
   -r count       记录计数跃点的路由(仅适用于 IPv4)。
   -s count       计数跃点的时间戳(仅适用于 IPv4)。
   -j host-list   与主机列表一起使用的松散源路由(仅适用于 IPv4)。
   -k host-list    与主机列表一起使用的严格源路由(仅适用于 IPv4)。
   -w timeout     等待每次回复的超时时间(毫秒)。
   -R             同样使用路由标头测试反向路由(仅适用于 IPv6)。
                  根据 RFC 5095，已弃用此路由标头。
                  如果使用此标头，某些系统可能丢弃
                  回显请求。
   -S srcaddr     要使用的源地址。
   -c compartment 路由隔离舱标识符。
   -p             Ping Hyper-V 网络虚拟化提供程序地址。
   -4             强制使用 IPv4。
   -6             强制使用 IPv6。
```

路由追踪命令（Linux: traceroute/tracepath，Windows: tracert）  

tracert命令(基于ICMP协议):
```shell
用法: tracert [-d] [-h maximum_hops] [-j host-list] [-w timeout] [-R] [-S srcaddr] [-4] [-6] target_name
选项:
    -d                 不将地址解析成主机名。
    -h maximum_hops    搜索目标的最大跃点数。
    -j host-list       与主机列表一起的松散源路由(仅适用于 IPv4)。
    -w timeout         等待每个回复的超时时间(以毫秒为单位)。
    -R                 跟踪往返行程路径(仅适用于 IPv6)。
    -S srcaddr         要使用的源地址(仅适用于 IPv6)。
    -4                 强制使用 IPv4。
    -6                 强制使用 IPv6。
```
即:tracert IPAddress|HostName  
tracert 114.114.114.114  
tracert g.cn  

pathping（基本结合了ping和tracert的功能）

```shell
用法: pathping [-g host-list] [-h maximum_hops] [-i address] [-n]
                [-p period] [-q num_queries] [-w timeout]
                [-4] [-6] target_name

选项:
    -g host-list     与主机列表一起的松散源路由。
    -h maximum_hops  搜索目标的最大跃点数。
    -i address       使用指定的源地址。
    -n               不将地址解析成主机名。
    -p period        两次 Ping 之间等待的时间(以毫秒为单位)。
    -q num_queries   每个跃点的查询数。
    -w timeout       每次回复等待的超时时间(以毫秒为单位)。
    -4               强制使用 IPv4。
    -6               强制使用 IPv6。
```

缩写含义：  
Internet Control Message Protocol (ICMP)  
IP Time-To-Live (TTL)
