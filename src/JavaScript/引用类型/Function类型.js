/**
 * Created by dylan on 2017/9/28.
 */

// ======================函数定义=================

/*
*   使用函数声明语法定义
* */
function sum(num1, num2) {
    return num1 + num2;
}

/*
*   使用函数表达式定义
* */
var sum1 = function (num1, num2) {
    return num1 + num2;
}

/*
*   Funtion构造函数定义
*   函数可以接收任意数量的参数，最后一个参数始终被看成是函数题，前面的参数则枚举出了新函数的参数
* */
var sum2 = new Function("num1", "num2", "return num1 + num2");  // 不推荐,解析两次代码，影响性能

// ===============================================

// 没有重载

// 函数声明与函数表达式
// 第一种情况，可以先声明，再写表达式
alert(sum2(10, 10));
function sum2(num1, num2) {
    return num1 + num2;
}

// 第二种情况 会报 错误
// 因为函数位于一个初始化语句种，而不是一个函数声明
alert(sum3(10, 10));
var sum3 = function (num1, num2) {
    return num1 + num2;
};


/*
*   作为值的函数
* */
