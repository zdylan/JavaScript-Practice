/**
 * Created by zhanggai on 17/9/29.
 */

/*
*   利用首选的对象字面量创建对象
* */

var person = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",

    sayName: function() {
        alert(this.name);
    }
};

// ECMAScript有两种属性： 数据属性 和 访问器属性

/*
*   数据属性
*
*   [[Configurable]]：表示能否通过delete删除属性从而重新定义属性
*   [[Enumerable]]: 表示能否通过for-in循环返回属性
*   [[Writable]]:   表示能否修改属性的值
*   [[Value]]:      包含这个属性的数据值
*
*   [[Configurable]],[[Enumerable]],[[Writable]]默认设置为true，
*   如需修改属性，必须使用 Object.defineProperty() 方法
*
* */

// 配置 writable 为 false后，不能修改属性值
var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});
alert(person.name); // "Nicholas"
person.name = "Greg";
alert(person.name); // "Nicholas"

// 配置 configurable 为 false 后，不能调用 delete 删除属性
var person1 = {};
Object.defineProperty(person1, "name", {
    configurable: false,
    value: "Nicholas"
});
alert(person1.name);    // "Nicholas"
delete person1.name;
alert(person1.name);    // "Nicholas"


/*
*   访问器属性
*
*   [[Configurable]]: 表示能否通过delete删除属性从而重新定义属性
*   [[Enumerable]]:   表示能否通过 for-in 循环返回属性
*   [[Get]]:    在读取属性时调用的函数
*   [[Set]]:    在写入属性时调用的函数
* */

// _year前面的下划线是一种常用的记号，用于表示只能通过对象方法访问的属性。
var book = {
    _year: 2004,
    edition: 1
};
Object.defineProperty(book, "year", {
    get: function () {
        return this._year;
    },
    set: function (newValue) {
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

book.year = 2005;
alert(book.edition);    // 2

// 上面的方法在ECMAScript5之前用的是两个非标准方法：
// __defineGetter__() 和 __defineSetter__()

book.__defineGetter__("year", function () {
    return this._year;
});
book.__defineSetter__("year", function (newValue) {
    if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
    }
});




/*
*   定义多个属性
*   Object.defineProperties()
*   该方法接收两个对象参数：第一个对象是要添加和修改其属性的对象；
*   第二个对象的属性与第一个对象中要添加或修改的属性一一对应。
* */
var book1 = {};
Object.defineProperties(book1, {
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this._year;
        },
        set: function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

/*
*   读取属性的特性
*   Object.getOwnPropertyDescriptor() 方法，
*   接收两个参数：属性所在的对象和要读取其描述符的属性名称,
*   返回值是一个对象,如果是访问器属性，属性有configurable,enumerable, get,set;
*   如果是数据属性，这个对象的属性有configurable,enumerable,writable,value
* */

var descriptor = Object.getOwnPropertyDescriptor(book1, "_year");
alert(descriptor.value);    // 2004
alert(descriptor.configurable); // false
