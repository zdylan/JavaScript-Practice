/**
 * Created by zhanggai on 17/9/27.
 */

/*
*   大多数引用类型都是Object类型的实例
*   创建 Object 实例的方式有两种
* */

/*
*   第一种是使用 new 操作符后跟 Object 构造函数
* */

var person = new Object();
person.name = "Nicholas";
person.age = 29;


/*
*   第二种是使用 对象字面量 表示法，开发人员更青睐字面量语法
* */

var person1 = {
    name: "Nicholas",
    age: 29
};


/*
*   通过对象字面量，可向函数传递大量可选参数
* */

function displayInfo(args) {
    var output = "";

    if (typeof args.name == "string") {
        output += "Name: " + args.name + "\n";
    }
    if (typeof args.age == "number") {
        // 对象的属性可以使用方括号语法，以字符串的形式访问

        var propertyAge = "age";
        output += "Age: " + args[propertyAge] + "\n";
    }

    console.log(output);
}

displayInfo({
    name: "Nicholas",
    age: 29
});
