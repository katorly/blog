---
title: 写一个能冷却的指令——BukkitRunnable的应用
date: 2022-03-21 00:22:25 +0800
categories: [Java, Bukkit]
---

前几天看到群上有人问怎么给插件自定义的指令写冷却功能，我在这里给大家分享一下我的思路。  

## 准备工作
### 开发环境
- Gitpod online vscode
- Java 17
- Minecraft Spigot 1.18.2

### 需要用到的类
[BukkitRunnable#runTaskLater](https://bukkit.windit.net/javadoc/org/bukkit/scheduler/BukkitRunnable.html#runTaskLater(org.bukkit.plugin.Plugin,long))

## 大致思路
思路很简单，不是要实现指令冷却嘛（就是不能让玩家频繁地执行指令，每执行完一次本插件的指令需要过几秒之后再执行），可以用一个Map储存需要被冷却的玩家，在执行指令之前先检查玩家是否在这个Map里，如果在就阻止该指令的执行，如果不在就正常执行指令。执行完后将玩家储存在Map里，等待几秒后再将其移出。  

为什么要实现冷却？原因有很多，我在这里列举一两个：  
- 有些指令用于查询数据库、访问静态资源等等，这类指令如果被玩家短时间内大量执行会占用服务器资源，很可能造成卡顿
- 有些指令可以让玩家在聊天栏实现某些特殊效果，你不想让玩家频繁使用这个效果

## 实现过程
先写一个CommandHandler类，这个不用我说了吧。  

CommandHandler是一次性的，相当于玩家执行完指令后这个Handler就死了，我们创建的Map要保证能重复使用就得是全局的，因此我们得在Handler上方创建一个像这样的Map：
```java
public List<UUID> listCooldown = new ArrayList<>();

@Override
    public boolean onCommand(CommandSender sender, Command command, String label, String[] args) {
        if (command.getName().equalsIgnoreCase("MyCommand")) {
            //你的代码
        }
        return true;
    }
```
你也许会问，为什么要用UUID来储存玩家？因为在Minecraft中，游戏识别玩家的途径是通过UUID而不是游戏ID，毕竟正版ID玩家可以自由修改，Mojang为保证改完后玩家们原来的数据还在，就弄了个永远不会改变的ID——UniqueID（UUID）。盗版的别问！（笑）  

接下来，判断指令输入者是否为玩家（因为后台也能输入指令，后台没有UUID，也不会有人去刷指令，如果要冷却需要另外处理，非常简单所以我这里就不赘述了）：
```java
if (!(sender instanceof Player)) {
    //如果不是玩家，你的代码
} else {
    //如果是玩家，你的代码
}
```
当玩家输入指令后，我们要先判断其是否处于冷却状态：
```java
Player p= (Player) sender; //获得这个玩家
if (!listCooldown.contains(p.getUniqueId())) {
    //如果不处于冷却状态，你的代码
} else {
    //处于冷却状态，你的代码
}
```
在不处于冷却状态的那里写完指令该做的操作之后，把玩家加入冷却的Map里：
```java
listCooldown.add(p.getUniqueId());
```
现在可以写我们的BukkitRunnable来实现等待几秒（以2秒为例）的功能了，我在这里用的是匿名BukkitRunnable，它允许你安排一个任务，而不用创建一个带有名字的新类，非常简洁：
```java
new BukkitRunnable() {
    @Override
    public void run() {
        listCooldown.remove(p.getUniqueId());
    }
}.runTaskLater(插件主类.INSTANCE, 2 * 20); //1秒 = 20Ticks
```
你可能会想，Runnable这么麻烦，用`sleep()`不就完事了？注意，sleep在Minecraft服务器开发这块领域根本不能用，你要是sleep了那就直接把主线程全部任务给终止了，服务器马上挂了。Runnable可以实现异步执行sleep而不会导致主线程终止（Runnable里不需要再写sleep）。  


BukkitRunnable还支持`runTaskTimer`，这个不但可以设置延迟，还可以设置每多少时间循环执行代码一次，相当于是有sleep的循环。  

指令冷却功能就完成啦，快去游戏内测试一下~  

![](https://cdn.jsdelivr.net/gh/katorly/Gallery001/blog/2022-03-22_08.57.13.png)