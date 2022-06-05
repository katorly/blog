---
title: 在去MC化的道路上——MCBBSv4测评
date: 2022-04-02 09:05:00 +0800
categories: [Minecraft, Community]
---

原文发于MCBBS：[https://www.mcbbs.net/thread-1321517-1-1.html](https://www.mcbbs.net/thread-1321517-1-1.html)  

本来我是不打算发评测帖的，毕竟快乐小方写得已经够全面了。不过还是发吧XD，发一些已有帖子未展示的内容。  

**圆规**正传，下面我们先来看看v4现有的界面和功能吧~  


## v4中的功能
与现在的v2不同，v4实现了全坛资源分类、搜索，将不再会有人去反馈版提问如何搜索资源啦~
资源类型分类：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/分类功能.PNG)

游戏版本分类：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/游戏版本功能.PNG)

在v2，如果外国人来了怎么办？只能用右上角谷歌翻译；
但是v4（虽然没什么用，毕竟资源介绍不会变成其它语言）：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/切换语言.PNG)

在v4中，通过两步验证功能，帐号安全可以得到更好的保障：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/两步验证功能.PNG)

夜晚浏览MCBBS，开了浏览器黑夜模式也没用？没事，绵羊~~采用了船新技术~~实现了这个功能的内置（未开放给用户）：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/绵羊的黑夜模式.png)

作为自研的正在开发中的v4，还没进入站点你就能发现~~它这最大的功能更新~~（只能通过Ctrl+F5解决）：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/坏掉的界面.PNG)  


## v4中的组件
在客户端Console显示的版权信息：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/在Console的信息.PNG)
如果你也想实现这种文字，可以去[Text to ASCII](https://patorjk.com/software/taag)生成。  

点赞、收藏、删除、举报：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/点赞收藏删除举报.PNG)  

因为有Bug，版本那里干脆就不允许用户在成功发布一个版本后编辑那一个版本的文件了：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/干脆不允许修改文件.PNG)  

对404 Not Found也有了特定的界面，而不是像现在v2这样用discuz!默认的：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/正常404页面.PNG)
当然在昨天（愚人节）404页面也有彩蛋：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/愚人节404页面.PNG)  

每个资源的末尾，都有作者信息，~~如果再加个赞助按钮恰饭就很方便了~~：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/资源末尾.PNG)  


## 开发历程
最开始的v2界面长这样，黑色的地方是打算替换成相应分类的图片的：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/原始UI.jpg)

后来征求了一下大家对于这个UI的意见（~~好评满满~~）：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/旧UI反馈.PNG)

于是宅魂~~异想天开~~，但最终因为广告面积太大遭到了大家的反对：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/UI废稿.png)
于是界面最终稍微改了一下，变成了现在的样子（在别的帖看得到，我就不放了）。  

最**生草**的，莫过于Zapic设计的“让用户扔掉小键盘”的验证码功能XD：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/Zapic的验证码.jpg)  


## 说说我的感受
总体来讲，这次v4还是挺令人期待的。~~自研最起码比v3强~~
完全丢弃了dicuz!和其它论坛系统，自主研发了一个资源中心，开发人员实在令人钦佩。  

在发帖上，摒弃了bbcode，完全使用markdown，降低了帖子排版的难度，也减少了奇奇怪怪的排版的产生。但是怎么不用[Milkdown](https://milkdown.dev)呢，这个可以让用户在markdown的同时也可以选择用富文本编辑，方便不会markdown的用户，一举两得，多好......  

相比v1和v2，v4在设计元素上实现了去MC化，这点我很赞成。我个人觉得MC社区没必要那么多MC元素，像Minecraft Forum和PMC多好，不要像wy那样，放入过多的MC元素，只起到了吸引圈外的玩家，对于广大圈内的Minecraft玩家并没有什么好处，看多了只会审美疲劳。  

在帖子分离上，v4起到了资源站的作用，实现了资源站与讨论站的分离，减少错版现象。对于纯粹找资源的会员和访客来讲，这无疑是最大的福利：不会被水帖和夹杂在一起的版块干扰，像PMC那样给予用户纯净浏览资源的体验。  

虽然目前大部分页面和功能都没有完成，但辛勤的开发人员已经马不停蹄地赶了至少2个月。期待v4的最终建成！  


## 解答几个问题
**Q:** 大家都在昨天发评测帖，为什么你要今天才发？  
**A:** 昨天是什么日子你懂的，不方便发XD  

**Q:** 你的帖子内容怎么这么少？  
**A:** 其它有关v4的内容可以在这里查看，因为快乐小方分享得比较全面：  
[【绝密】MCBBS v4 ■■情报泄露！内附评测报告！](https://www.mcbbs.net/thread-1321313-1-1.html)  

**Q:** v4是不是最近才开始内测？  
**A:** 不是的，详情可以见这个公告发布的时间：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/测试开始时间.PNG)  

**Q:** v4在哪里？我想去看看！  
**A:** 下周就公开邀请测试了，你急什么XD  

**Q:** 为什么突然多了这么多v4评测帖？  
**A:** 因为这个：  
![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/other/为什么突然这么多评测帖.png)  


本次分享就到这里了，看了这么多关于v4的评测帖，大家有什么想法呢？**欢迎发表观点哦！**  
