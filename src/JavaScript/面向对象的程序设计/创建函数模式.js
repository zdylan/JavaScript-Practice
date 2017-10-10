/**
 * Created by zhanggai on 17/9/29.
 */

/*
*   创建对象
*   Object构造函数或对象字面量都可以用来创建单个对象
*
*   缺点：使用同一个接口创建很多对象，会产生大量的重复代码
* */

/*
*   工厂模式
*
*   优点：解决了创建多个相似对象的问题
*   缺点：没有解决对象识别的问题（怎样知道一个对象的类型）
* */

function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        alert(this.name);
    };
    return o;
}

var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");

person1.sayName();

/*
*   构造函数模式
*
*   缺点：每个方法都要在每个实例上重新创建一遍
* */

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        alert(this.name);
    };
}

var person3 = new Person("Nicholas", 29, "Software Engineer");
var person4 = new Person("Greg", 27, "Doctor");

// 为了解决方法创建多遍的问题，可通过把函数定义转移到构造函数外部来解决这个问题
// 但是这样做带来了一个新问题，sayName作为全局作用域只能被某个对象调用，这让全局作用域有点名不副实

function Person1(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}
function sayName() {
    alert(this.name);
}

/*
*   原型模式
*
*   缺点：多个实例共享所有的属性和方法
* */

function Person2() {}
Person2.prototype.name = "Nicholas";
Person2.prototype.age = 29;
Person2.prototype.job = "Software Engineer";
Person2.prototype.sayName = function() {
    alert(this.name);
};

var person5 = new Person2();
person5.sayName();
var person6 = new Person2();
person6.sayName();
alert(person5.sayName == person6.sayName);  // true

// 每次定义都要写prototype，针对这种情况的改进版本如下
function Person3() {}
Person3.prototype = {
    constructor: Person3,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function() {
        alert(this.name);
    }
};

/*
*   组合使用构造函数模式和原型模式
*
*   优点：解决了构造函数模式和原型模式的缺点
* */
function Person4(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Count"];
}
Person4.prototype = {
    constructor: Person4,
    sayName: function() {
        alert(this.name);
    }
}

/*
*   动态原型模式
* */

function Person5(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if (typeof this.sayName != "function") {
        Person5.prototype.sayName = function() {
            alert(this.name);
        };
    }
}

/*
*   寄生构造函数模式
* */

/*
*   稳妥构造函数模式
* */