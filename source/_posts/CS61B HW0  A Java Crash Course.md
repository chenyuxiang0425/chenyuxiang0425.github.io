---
layout: pages
title: CS61B HW0  A Java Crash Course
date: 2019-12-02 15:21:16
tags:
- CS61B
- Java
- 刷题
categories:
- Java
- CS61B
- 作业
---



# CS61B HW0  A Java Crash Course



## HW Goals

In this assignment, we will go through basic Java syntax concepts.





# Exercises

### Creative Exercise 1b: DrawTriangle

Your goal is to create a program that prints the following figure. Your code should use loops (i.e. shouldn’t just be five print statements, that’s no fun).

```java
*
**
***
****
*****
```

Name this new method `drawTriangle` and give it a return type of `void` (this means that it doesn’t return anything at all).

The `drawTriangle` method should take one parameter named `N`, and it should print out a triangle exactly like your triangle from exercise 1a, but `N` asterisks tall instead of 5.

After writing `DrawTriangle`, modify the main function so that it calls `DrawTriangle` with `N = 10`.

You may find `System.out.print` to be a useful alternative to `System.out.println`. The difference is that `System.out.print` does not include an automatic newline.





### Exercise 2

Using everything you’ve learned so far on this homework, you’ll now create a function with the signature `public static int max(int[] m)` that returns the maximum value of an int array. You may assume that all of the numbers are greater than or equal to zero.

Modify the [code below](http://goo.gl/engJ93) (also found [here](https://goo.gl/YhZLf3)) so that `max` works as described. Furthermore, modify `main` so that the `max` method is called on the given array and its max printed out (in this case, it should print 22).

```java
public class ClassNameHere {
    /** Returns the maximum value from m. */
    public static int max(int[] m) {
        return 0;
    }
    public static void main(String[] args) {
       int[] numbers = new int[]{9, 2, 15, 2, 22, 10, 6};      
    }
}
```





### Optional: Exercise 4

This is a particularly challenging exercise, but strongly recommended.

Write a function `windowPosSum(int[] a, int n)` that replaces each element a[i] with the sum of a[i] through a[i + n], but only if a[i] is positive valued. If there are not enough values because we reach the end of the array, we sum only as many values as we have.

For example, suppose we call `windowPosSum` with the array `a = {1, 2, -3, 4, 5, 4}`, and `n = 3`. In this case, we’d:

- Replace a[0] with a[0] + a[1] + a[2] + a[3].
- Replace a[1] with a[1] + a[2] + a[3] + a[4].
- Not do anything to a[2] because it’s negative.
- Replace a[3] with a[3] + a[4] + a[5].
- Replace a[4] with a[4] + a[5].
- Not do anything with a[5] because there are no values after a[5].

Thus, the result after calling `windowPosSum` would be `{4, 8, -3, 13, 9, 4}`.

As another example, if we called `windowPosSum` with the array `a = {1, -1, -1, 10, 5, -1}`, and `n = 2`, we’d get `{-1, -1, -1, 14, 4, -1}`.

```java
public class BreakContinue {
  public static void windowPosSum(int[] a, int n) {
    /** your code here */ 
  }

  public static void main(String[] args) {
    int[] a = {1, 2, -3, 4, 5, 4};
    int n = 3;
    windowPosSum(a, n);

    // Should print 4, 8, -3, 13, 9, 4
    System.out.println(java.util.Arrays.toString(a));
  }
}
```

Starter code is available at [this link](https://goo.gl/bh5zaZ).

Hint 1: Use two for loops.

Hint 2: Use `continue` to skip negative values.

Hint 3: Use `break` to avoid going over the end of the array.







## My solution

### Creative Exercise 1b: DrawTriangle

#### Code

```java
public class Drawing_a_Triangle {
    public static void drawTriangle(int n) {
        int row = 0;
        int SIZE = n;
        while (row < SIZE) {
            int col = 0;
            while (col <= row) {
                System.out.print('*');
                col = col + 1;
            }
            System.out.println();
            row = row + 1;
        }
    }
    public static void main(String[] args) {
        drawTriangle(10);
    }
}
```

#### Result

```java
*
**
***
****
*****
******
*******
********
*********
**********
```





### Exercise 2

#### Code

```java
public class MaxNumber {
    /*Print the max number of the array.*/
    public static int max(int[] m) {
        int index = 0;
        int max = 0;
        while (index < m.length) {
            if (m[index] > max) {
                max = m[index];
            }
            index++;
        }
        return max;
    }
    public static void main(String[] args) {
        int[] numbers = new int[]{9, 2, 15, 2, 22, 10, 6};
        System.out.println(max(numbers));
    }
}
```

#### Result

```java
22
```





### Optional: Exercise 4

#### code

```java
public class BreakContinue {
    public static void windowPosSum(int[] a, int n) {
        for (int i = 0; i < a.length; i++) {
            if (a[i] > 0) {
                if (i + n < a.length) {
                    int sum = 0;
                    for (int j = i; j <= i + n; j++) {
                        sum = sum + a[j];
                        a[i] = sum;
                    }
                } else {
                    int sum = 0;
                    for (int j = i; j < a.length; j++) {
                        sum = sum + a[j];
                        a[i] = sum;
                    }
                }
            } else {
                continue;
            }
        }
    }

    public static void main(String[] args) {
        int[] a = {1, 2, -3, 4, 5, 4};
        int n = 3;
        windowPosSum(a, n);
    
        // Should print 4, 8, -3, 13, 9, 4
        System.out.println(java.util.Arrays.toString(a));
    }

}
```

#### Result

```java
[4, 8, -3, 13, 9, 4]
```

