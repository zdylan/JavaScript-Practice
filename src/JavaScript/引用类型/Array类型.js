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


/*
*   检测数组
* */

// 假定单一的全局执行环境
if (colors2 instanceof Array) {
    console.log('colors2 is array');
}

// 有多个框架，对应多个构造函数时
if (Array.isArray(colors5)) {
    console.log('colors5 is array');
}


/*
*   转换方法
*
*   所有对象都包含 toLocaleString()、toString() 和 valueOf() 方法
* */

// 数组的 toString() 返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串
alert(colors2.toString());
// valueOf() 还是返回数组
alert(colors2.valueOf());
// 默认调用每项的 toString()
alert(colors2);

var person1 = {
    toLocaleString: function() {
        return "Nikolaos";
    },
    toString: function() {
        return "Nicholas";
    }
};

var person2 = {
    toLocaleString: function() {
        return "Grigorios";
    },
    toString: function() {
        return "Greg";
    }
};

var people = [person1, person2];
alert(people);                  // Nicholas, Greg
alert(people.toString());       // Nicholas, Greg
alert(people.toLocaleString()); // Nikolaos, Grigorios


/*
*   栈方法
*   后进先出
* */

var colors10 = new Array();
// push()方法接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度
var count = colors10.push("red");   // colors10: [ "red" ]; count = 1
// pop() 方法从数组末尾移除最后一项, 返回移除的项
count = colors10.pop();             // colors10: []; count = 0


/*
*   队列方法
*   先进先出
* */

var colors11 = new Array();
// 向数组末尾添加项
var count1 = colors11.push("red", "green"); // colors11: ["red","green"]; count1 = 2
// shift() 方法移除数组中的第一个项并返回该项
count1 = colors11.shift();  // colors11: ["green"]; count1 = 1;

// unshift()方法与shift()方法用途相反，在数组前端添加任意个项并返回新数组的长度


/*
*   重排序方法
* */

var values = [1, 2, 3, 4, 5];
// 反转数组
values.reverse();   // 5,4,3,2,1

var values1 = [0, 1, 5, 10, 15];
// 每项转 toString(),比较字符串
values1.sort();     // 0, 1, 10, 15, 5

// sort接收比较函数
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}

values1.sort(compare);  // 0, 1, 5, 10, 15


/*
*   操作方法
* */

// concat
var colors2 = ["red", "green"];
// concat() 方法基于当前数组中的所有项创建一个新数组
var colors3 = colors2.concat("yellow", ["black", "brown"]);  // red,green,yellow,black,brown

// slice() 可以传递以或两个参数，表示从第几个开始，到第几个结束
// 如果参数有负数，则用数组长度加上该数来确定相应的位置
var colors4 = colors3.slice(1); // green,yellow,black,brown
var colors5 = colors3.slice(1,3);   // green, yellow, black

// splice() 可删除、插入、替换
// 删除, splice(0,2), 从位置0开始删除2项
// 插入，splice(2,0,"red","green"), (起始位置、要删除的项数、要插入的任意数量项)
// 替换, splice(2,1,"red"), (起始位置、要删除的项数、要插入的任意数量项)


/*
*   位置方法
*   indexOf(), lastIndexOf()
*   接收两个参数：要查找的项和（可选的）表示查找起点位置的索引
* */

var numbers = [1,2,3,4,5,4,3,2,1];
alert(numbers.indexOf(4));  // 3
alert(numbers.indexOf(4, 4));   // 5


/*
*   迭代方法
*   every(), filter(), forEach(), map(), some()
*   接收两个参数：要在每一项上运行的函数和（可选的）运行该函数的作用域对象
*   传入参数的函数会接收三个参数：数组项的值、该项在数组中的位置和数组对象本身
* */

// every()：对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
var numbers1 = [1,2,3,4,5,4,3,2,1];
var everyResult = numbers1.every(function(item, index, array){
    return (item > 2);
});
alert(everyResult); // false

// some(): 对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true
var someResult = numbers1.some(function(item, index, array){
    return (item > 2);
});
alert(someResult);  // true

// filter(): 对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组
var filterResult = numbers1.filter(function(item, index, array){
    return (item > 2);
});
alert(filterResult);    // [3,4,5,4,3]

// map(): 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
var mapResult = numbers1.map(function(item, index, array){
    return item * 2;
});
alert(mapResult);   // [2,4,6,8,10,8,6,4,2]

// forEach(): 对数组中的每一项运行给定函数，这个方法没有返回值
numbers1.forEach(function(item, index, array){
    // 执行某些操作
});


/*
*   缩小方法
*   reduce(), reduceRight()
*   reduce()从第一项开始往后遍历
*   reduceRight()从最后一项开始往前遍历
*   接收两个参数：在每一项上调用的函数和（可选的）作为缩小基础的初始值
*   传入参数的函数会接收四个参数：前一个值、当前值、项的索引和数组对象。
*   这个函数返回的任何值都会作为第一个参数自动传给下一项
* */

// reduce() 方法求数组中所有值之和
var values11 = [1,2,3,4,5];
var sum = values11.reduce(function(prev, cur, index, array){
    return prev + cur;
});
alert(sum); // 15