#客户端
能发起请求的都叫客户端
浏览器 移动浏览器 linux curl 微信 QQ

#服务器
能接受请求的都叫服务器
需要在特定的机器(IP)上启动特定的端口(port)
国风美唐4号楼                    1701

#HTTP协议
人之间的交流
1. 一种媒介 声波 空气
2. 使用相同的语言  互相能理解
计算机的世界里A - B
1. 光纤 无线信号 
2. 协议 和一种数据封装格式

#普通网站的访问过程 
1. 打开浏览器，输入域名和地址，回车的时候向服务器发起请求了
www.baidu.com
访问chrome缓存->搜索操作系统缓存->访问host文件->发起DNS调用->运营商DNS缓存->找com域名服务器
2. 要进行域名解析，把域名改成IP(192.168.1.1)[根域名服务器]。
3.客户端随机端口向服务器建立连接。
4.客户端发起HTTP请求
5

    > GET / HTTP/1.1
    > User-Agent: curl/7.30.0
    > Host: localhost:8080
    > Accept: */*
    >
    < HTTP/1.1 200 OK
    < Date: Sat, 17 Oct 2015 07:44:45 GMT
    < Connection: keep-alive
    < Transfer-Encoding: chunked
    <
    <!DOCTYPE html> <html> <head lang="en">
    o world </body> </html>* Connection #0 t

