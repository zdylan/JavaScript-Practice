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
*   作为值的函数, 函数作为参数传递
* */
function callSomeFunction(someFunction, someArgument) {
    return someFunction(someArgument);
}

/*
*   函数内部属性
*   函数内部包含两个特殊的对象：arguments 和 this
*   arguments 是一个类数组对象， 并有一个名叫 caller 的属性
* */
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// 上面函数的执行与函数名紧紧耦合在了一起，消除耦合可使用如下方法
function factorial1(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}


/*
*   函数属性和方法
*   每个函数都包含两个属性：length 和 prototype
*   每个函数都包含两个非继承而来的方法：apply() 和 call()
*
*   length: 表示函数希望接收的命名参数的个数
*   prototype: 保存它们所有实例方法的真正所在
*
*   apply()接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组（可以是Array实例，也可以是arguments对象）。
*   call()接收两个参数：一个是在其中运行函数的作用域，另一个是直接传递给函数
*
*   除了传递参数不同外，这两个方法作用相同
* */

function sum(num1, num2) {
    return num1 + num2;
}

function callSum(num1, num2) {
    return sum.apply(this, [num1, num2]);
}

function callSum1(num1, num2) {
    return sum.call(this, num1, num2);
}

// 传递参数并非apply()和call()真正的用武之地；它们真正强大的地方是能够扩充函数赖以运行的作用域。
window.color = "red";
var o = { color: "blue" };

function sayColor() {
    alert(this.color);
}

sayColor();     // red
sayColor.call(this);    // red
sayColor.call(window);  // red
sayColor.call(o);       // blue

// ECMAScript5支持bind()函数

var objectSayColor = sayColor.bind(o);
objectSayColor();   // blue

