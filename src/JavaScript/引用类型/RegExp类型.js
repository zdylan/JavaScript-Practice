/**
 * Created by dylan on 2017/9/28.
 */

/*
*   var expression = / pattern / flags;
*
*   flags支持下列3个标志
*   g: 全局模式，模式将被应用于所有字符串
*   i: 表示不区分大小写模式
*   m: 表示多行模式
* */

// 匹配字符串中所有"at"的实例
var pattern1 = /at/g;

// 匹配第一个"bat"或"cat",不区分大小写
var pattern2 = /[bc]at/i;

// 匹配所有以"at"结尾的3个字符的组合，不区分大小写
var pattern3 = /.at/gi;

// 所有元字符必须转义。包括：( [ { \ ^ $ | ) ? * + . ] }

// 上面是使用字面量形式定义的正则表达式，接下来使用构造函数创建
// 等价于 pattern2
var pattern4 = new RegExp("[bc]at", "i")


/*
*   RegExp 实例属性
*
*   global: 布尔值，表示是否设置了 g 标志
*   ignoreCase: 布尔值，表示是否设置了 i 标志
*   lastIndex: 整数，表示开始搜索下一个匹配项目的字符位置，从0算起
*   multiline: 布尔值，表示是否设置了 m 标志
*   source: 正则表达式的字符串表示
* */

var pattern5 = /\[bc\]at/i;

alert(pattern5.global);     // false
alert(pattern5.ignoreCase); // true
alert(pattern5.multiline);  // false
alert(pattern5.lastIndex);  // 0
alert(pattern5.source);     // "\[bc\]at"

var pattern6 = new RegExp("\\[bc\\]at", "i");

alert(pattern6.global); // false
alert(pattern6.ignoreCase); // true
alert(pattern6.multiline);  // false
alert(pattern6.lastIndex);  // 0
alert(pattern6.source);     // "\[bc\]at


/*
*   RegExp实例方法
*
*   对象的主要方法是 exec()
*   exec() 接收一个参数，即要应用模式的字符串，然后返回包含第一个匹配项信息的数组；在没有匹配项时返回null.
*   返回的数组虽然是 Array 的实例，但包含两个额外的属性：index 和 input.
*
*   test() 接收一个参数，在模式与该参数匹配的情况下返回true；否则，返回false
* */

var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
alert(matches.index);
alert(matches.input);


/*
*   RegExp 构造函数属性
*
*   属性名包括：一个长属性名和一个短属性名
*   长属性名        短属性名        说明
*   input           $_          最近一次要匹配的字符串
*   lastMatch       $&          最近一次的匹配项
*   lastParen       $+          最近一次匹配的捕获组
*   leftContext     $`          input字符串中lastMatch之前的文本
*   multiline       $*          布尔值，表示是否所有表达式都使用多行模式
*   rightContext    $'          input字符串中lastMatch之后的文本
* */

var text1 = "this has been a short summer";
var pattern1 = /(.)hort/g;

if (pattern1.text(text1)) {
    alert(RegExp.input);        // this has been a short summer
    alert(RegExp.leftContext);  // this has been a
    alert(RegExp.rightContext); // summer
    alert(RegExp.lastMatch);    // short
    alert(RegExp.lastParen);    // s
    alert(RegExp.multiline);    // false
}
// 另一种写法
if (pattern1.test(text1)) {
    alert(RegExp.$_);
    alert(RegExp["$`"]);
    alert(RegExp["$'"]);
    alert(RegExp["$&"]);
    alert(RegExp["$+"]);
    alert(RegExp["$*"]);
}

// 除了以上属性外，还有多达9个用于存储捕获组的构造函数属性。
// 语法为 RegExp.$1 , RegExp.$2 ... RegExp.$9
var pattern2 = /(..)or(.)/g;
if (pattern2.test(text1)) {
    alert(RegExp.$1);   // sh
    alert(RegExp.$2);   // t
}

/*
*   模式的局限性
* */