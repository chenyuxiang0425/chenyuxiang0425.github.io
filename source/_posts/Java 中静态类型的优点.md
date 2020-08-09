---
layout: pages
title: 为何在 Java我们可用 System.out.println(5 + "horse")，而在 Python不能用 print(5 + "horse")？
date: 2019-12-05 12:47:16
tags:
- CS61B
- Java
categories:
- Java
- CS61B
---



## 原因

考虑这两个 Java 语句

```java
String h = 5 + "horse";
```

和

```java
int h = 5 + "horse";
```

第一个能成功运行，但第二个有类型错误。Java 是强类型的。如果认为 `h` 是 `string`，它可以连接两个元素并且给你一个字符串。 但如果 `h` 是 `int`，Java 不能连接一个数字和一个字符串，如果给你一个字符串。

Python 没有约束类型，它不会对你想要的类型做出假设。对于 `x = 5 + "horse"`到底应该是字符串还是数字，Python 不知道，因此它报错了。

这个情况下，`System.out.println(5 + "horse");`，Java将参数解释为字符串，并输出 `5horse` 。更有用的， `System.out.println(5 + " "); `，5 后面加个空格。



## 引申

### Java 中静态类型的优点

- The compiler ensures that all types are compatible, making it easier for the programmer to debug their code. 编译器确保所有类型是兼容的，使得程序员更容易 debug 代码。

- Since the code is guaranteed to be free of type errors, users of your compiled programs will never run into type errors. For example, Android apps are written in Java, and are typically distributed only as .class files, i.e. in a compiled format. As a result, such applications should never crash due to a type error since they have already been checked by the compiler. 代码确保本身没有类型错误，以此你编译的程序永远不会犯类型错误。例如，安卓的 app 用 Java 编写，并且一般只以 .class 的文件发布，即编译过的形式。因此，这种应用程序永远不会因为类型错误而崩溃，因为他们已经被编译器检查过了。

- Every variable, parameter, and function has a declared type, making it easier for a programmer to understand and reason about code. 每个变量、参数和方法都有一个声明过的类型，使得对程序员来说更容易理解和推出代码。

  

### 额外的思考锻炼

What does `System.out.println(5 + "10");` print? 510, or 15? How about `System.out.println(5 + 10);`?









原文引用自 [CS61B 1.1 Essentials ](https://joshhug.gitbooks.io/hug61b/content/chap1/chap11.html) Static Typing 段落