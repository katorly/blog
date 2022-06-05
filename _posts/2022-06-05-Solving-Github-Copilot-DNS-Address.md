---
title: 解决Github Copilot无法连接到服务器"connect ECONNREFUSED 127.0.0.1:443"的问题
date: 2022-05-06 23:04:00 +0800
categories: [Github]
---

## 问题描述

这个问题其实5月份就有。话不多说，直接贴别人问的问题：  
>求问vscode 的copilot 连不上服务器报错read ECONNRESET，如何解决？
>GitHub Copilot could not connect to server. Extension activation failed: "read ECONNRESET"

## 解决方案

是国内的魔幻网络和运营商搞的鬼。  

尝试修改您电脑的DNS服务器地址以解决此问题：
- 将ipv4改为`8.8.8.8`
- 将ipv6改为`2001:4860:4860::8888`

我使用了此方法，并且问题得到了解决。如果答案对您有帮助，可以分享这篇文章，让更多的人看到！  

参考资料以及详细过程：[https://www.zhihu.com/question/518408113/answer/2500892553](https://www.zhihu.com/question/518408113/answer/2500892553)