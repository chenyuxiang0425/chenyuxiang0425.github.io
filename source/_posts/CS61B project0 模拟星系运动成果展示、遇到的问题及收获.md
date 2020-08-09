---
layout: pages
title: 模拟星系运动成果展示、遇到的问题及收获
date: 2019-12-14 20:42:16
tags:
  - CS61B
  - Java
  - project
categories:
  - Java
  - CS61B
  - project
---



# CS61B project0 模拟星系运动成果展示、遇到的问题及收获

## 任务

计算 N 个物体在一个平面上的运动，绘制了宇宙中物体在万有引力的作用下相互运动的情形。

## 具体内容

### 1. 万有引力计算公式

![img](https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/pic/item/0823dd54564e9258d403201b9082d158ccbf4e0b.jpg)

### 2. 创建一个 Body.java 文件

包含6个变量（x方向坐标，y方向坐标，x方向速度分量，y方向速度分量，质量，图片）

#### 具体计算步骤包括

1. 计算距离（ calcDistance 方法）
2. 计算合力F （calcForceExertedBy 方法）
3. 计算合力在 x ,y 方向上的分量 （calcForceExertedByX and calcForceExertedByY）
4. 计算单一物体受多个物体在 x,y 方向上合力的分量 （calcNetForceExertedByX and calcNetForceExertedByY），这里注意要排除该物体本身
5. 计算 dt 时间后物体的变化情况（ update 方法），这里通过 F = ma ，计算加速度后更新 x,y 坐标和 x,y 上的速度分量
6. 绘图方法（draw)

### 3.创建一个模拟器 NBody.java 文件

通过标准输入文件获取6个变量

```java
$ more planets.txt
5
2.50e+11
1.4960e+11  0.0000e+00  0.0000e+00  2.9800e+04  5.9740e+24    earth.gif
2.2790e+11  0.0000e+00  0.0000e+00  2.4100e+04  6.4190e+23     mars.gif
5.7900e+10  0.0000e+00  0.0000e+00  4.7900e+04  3.3020e+23  mercury.gif
0.0000e+00  0.0000e+00  0.0000e+00  0.0000e+00  1.9890e+30      sun.gif
1.0820e+11  0.0000e+00  0.0000e+00  3.5000e+04  4.8690e+24    venus.gif
```

#### 具体计算步骤包括

1. 获取宇宙半径大小 （readRadius 方法），标准输入文件中的`2.50e+11`

2. 根据输入文件创建Body.class中的对象，然后以此对象进行调用方法（readBodies 方法）

3. 绘图

   ①收集输入信息

   ②画背景

   ③画单一 Body

   ④画多个 Body

4. 创建动画效果

   ①创建 所有Body 在 x 和 y 方向上的合力数组（循环方法）

   ②运用 update 方法更新位置，用数组存储多个 Body（循环方法）

   ③画背景

   ④画所有 Body（循环方法）

   ⑤双重缓冲

   ⑥暂停 10 毫秒

   ⑦更新时间 (t + dt）

5. 标准输出



### 4. 其他可以做的工作

1. 加音乐
2. 支持弹性碰撞
3. 增加宇宙飞船，使其受到太阳系中物体的引力



## 遇到的问题

#### 1. 编写第二个构造函数

```java
public Body(Body b) {    
    /* Constructor of a planet copy */    
    this(b.xxPos, b.yyPos, b.xxVel, b.yyVel, b.mass, b.imgFileName);
}
```

#### 2.自动化测试编写方法

第一次写测试，依葫芦画瓢

#### 3.数组存储

```java
for (int i =0; i < Bodies.length; i++) {
    xForces[i] = Bodies[i].calcNetForceExertedByX(Bodies);
    yForces[i] = Bodies[i].calcNetForceExertedByY(Bodies);
}
```

不能是`i <= Bodies.length`，不能有等号。

#### 4. == 与 equals 的区别

== 比较的是对象是否相同，比较的是地址。

equal 比较的是两个对象的某一值是否相同。

## 收获

1. 整体角度分解问题，复杂问题分解为多个简单需求解决
2. 自动化测试，测试每个方法是否符合要求
3. 运用抽象，关心输入参数和输出值，对于符合要求的方法不关心内部
4. 通过demo，官方文档迅速上手某一库的使用
5. 有时候重写方法比找出错误更有用