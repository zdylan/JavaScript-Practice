/**
 * Created by zhanggai on 17/9/28.
 */


/*
*   通过Date构造函数创建一个日期对象.
*   不传递参数的情况下，新创建的对象自动获得当前日期和时间。
* */
var now = new Date();

/*
*   如果想根据特定的日期和时间创建日期对象，ECMAScript提供来两个方法：
*   Date.parse(), Date.UTC()
*
*   Date.parse(),接收一个表示日期的字符串参数，格式如下：
*   - “月／日／年”， 如 6/13/2004;
*   - "英文月名 日，年"， 如 January 12, 2004;
*   - "英文星期几 英文月名 日 年 时：分：秒 时区“， 如 Tue May 25 2004 00:00:00 GMT-0700
*   - IOS 8601 扩展格式 YYYY-MM-DDTHH:mm:ss:sssZ, 如 2004-05-25T00:00:00
*
*
*   Date.UTC(), 参数分别是年份、基于0的月份（一月是0，二月是1，以此类推）、月中的哪一天（1到31）、
*   小时数（0到23）、分钟、秒以及毫秒数。前两个参数是必须的
* */

// 如果传入Date.parse()方法的字符串不能表示日期，那么它会返回NaN
// 下方两种方式等价
var someDate = new Date(Date.parse("May 25, 2004"));
var someDate1 = new Date("May 25, 2004");

// GMT时间2000年1月1日午夜零时
var y2k = new Date(Date.UTC(2000, 0));
// 本地时间2000年1月1日午夜零时
var y2k1 = new Date(2000, 0);

// 返回表示调用这个方法时的日期和时间的毫秒数
var nowDate = Date.now();


/*
*   继承的方法
* */


/*
*   日期格式化方法
* */

/*
*   日期／时间组件方法
* */
