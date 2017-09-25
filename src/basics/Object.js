/**
 * Created by dylan on 2017/9/22.
 */

/*
 *   JS中的所有事物都是对象，对象是拥有 属性 和 方法 的数据
 * */

var txt = "Hello";

// 内建属性
txt.length = 5;

// 内建方法
txt.indexOf();
txt.replace();
txt.search();

/*
*   创建 JavaScript 对象
* */
var person = new Object();
person.firstname = "Bill";
person.lastname = "Gates";
person.age = 55;
person.eyecolor = "blue";

/*
*   使用对象 literals
* */

var person1 = { firstname: "John", lastname: "Doe", age: 30, eyecolor: "blue" };


/*
*   使用对象构造器
* */
function person(firstname, lastname, age, eyecolor) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.eyecolor = eyecolor;
}