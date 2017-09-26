/**
 * Created by zhanggai on 17/9/27.
 */

/*
*   数组的每一项可保存任何类型的数据
* */

/*
*   创建数组的基本方式有两种
*   第一种是使用 Array 构造函数
*   第二种是使用 数组字面量 表示法
* */

/*
*   第一种方法
* */
var colors = new Array();
// 如果知道项目数量，可在构造函数传递该数量
var colors1 = new Array(20);
// 也可以传递具体数据项
var colors2 = new Array("red", "blue", "green");
// 使用 Array 构造函数时可以省略 new 操作符
var colors3 = Array(3);
var colors4 = Array("Greg");

/*
*   第二种方法
* */
var colors5 = ["red", "blue", "green"];
var colors6 = [];       // 创建一个空数组
var colors7 = [1,2,];   // 不要这样！这样会创建一个包含2或3项的数组
var colors8 = [,,,,,];  // 不要这样！这样会创建一个包含5或6项的数组

