---
layout: pages
title: CS61B Project3 step1 
date: 2020-03-29 19:56:16
tags:
- CS61B
- Java
- project
categories:
- Java
- CS61B
- project
---



# CS61B Project3 step1 

Project3 确实难。。step1 要求实现一个地图生成算法，一开始完全没有思路。
参考的知乎上这篇博文[【游必有方】一种 RogueLike 地图生成算法
](https://zhuanlan.zhihu.com/p/30724817?utm_source=qq&utm_medium=social&utm_oi=778991333737009152),没有学到精髓，自己试着实现了一下，但效果不太理想。第一个 World 凉了。
zangsy写的[zangsy/BPSpace.java](https://github.com/zangsy/cs61b_sp19/blob/master/proj3/byow/Core/BPSpace.java)利用 BST 分割空间，确实是个很好的方式，参考着他写的写了一遍。
目前姑且实现了伪随机地图，下一步要完成键盘交互的工作。
project 原地址: [Project3](https://sp19.datastructur.es/materials/proj/proj3/proj3)
