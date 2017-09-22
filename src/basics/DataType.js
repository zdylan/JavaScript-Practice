/**
 * Created by dylan on 2017/9/22.
 */

// 字符串、数字、布尔、数组、对象、Null、Undefined


/*
 *   动态类型
 *   相同的变量可用作不同的类型
 * */

var x;          // x 为 undefined
var x = 6;      // x 为 数字
var x = "Bill"; // x 为 字符串


/*
 *   字符串
 *   字符串可以是引号中的任意文本。可使用单引号或双引号
 * */

var carname = "Bill Gates";
var carname = 'Bill Gates';

/*
 *   数字
 *   js只有一种数字类型。可以带小数点，也可以不带
 * */

var x1 = 34.00;     // 带小数点
var x2 = 34;        // 不带小数点

// 极小或极大的数字可以通过科学计数来写

var y = 123e5;  // 12300000
var z = 123e-5; // 0.00123


/*
 *   布尔
 *   布尔只能有两个值: true 或 false
 * */

var x = true;
var y = false;


/*
 *   数组
 * */

// 方式一
var cars = new Array();
cars[0] = "Audi";
cars[1] = "BMW";
cars[2] = "Volvo";

// 方式二
var cars = new Array("Audi", "BMW", "Volvo");

// 方式三
var cars = ["Audi", "BMW", "Volvo"];

/*
 *   对象
 *   对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式来定义
 * */

var person = {
    firstname: "Bill",
    lastname: "Gates",
    id: 5566
};

var name = person.lastname;
var name1 = person["lastname"];

/*
 *   Undefined 和 Null
 *   Undefined这个值表示变量不含有值
 *   可以通过将变量的值设置为 null 来清空变量
 * */

cars = null;
person = null;


/*
 *   声明变量类型
 *   当你声明新变量时，可以使用 "new" 来声明其类型
 *   js变量均为对象。 当声明一个变量时，就创建了一个新的对象
 * */

var carname = new String;
var x = new Number;
var y = new Boolean;
var cars = new Array;
var person = new Object;

