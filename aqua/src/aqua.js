/*!
 * welcome to use aqua toolbox！
 * Author　　：roketRobin
 * Summary　 ：bussines irrelevant、dom irrelevant、js useful function set
 * version　 ：V0.1.0
 * Lisence   :Apache 2.0 http://www.apache.org/licenses/
 */
/**
 * TimeSpan just like the class TimpSpan in C# ,represent the time difference
 */
var TimeSpan = (function () {
    function TimeSpan(millionseconds) {
        this.totalMillionseconds = millionseconds;
        this.totalSeconds = millionseconds / 1000;
        this.totalMinutes = this.totalSeconds / 60;
        this.totalHours = this.totalMinutes / 60;
        this.totalDays = this.totalHours / 24;
        this.day = Math.floor(millionseconds / (1000 * 60 * 60 * 24));
        var surplus = millionseconds % (1000 * 60 * 60 * 24);
        this.hour = surplus / (1000 * 60 * 60);
        surplus = surplus % (1000 * 60 * 60);
        this.minute = surplus / (1000 * 60);
        surplus = surplus % (1000 * 60);
        this.second = surplus / (1000);
        surplus = surplus % (1000);
        this.millionsecond = surplus;
    }
    return TimeSpan;
}());
/**
 * aqua 对象
 */
var aqua = (function () {
    "use strict";
    var aqua = {
        /**
         * judge an object is a JSON object or not
         * 判断一个对象是否是Json对象
         * @param {any} obj
         * @returns {bool}
         */
        isJson: function (obj) {
            return typeof (obj) === "object" &&
                Object.prototype.toString.call(obj).toLowerCase() === "[object object]" &&
                !obj.length;
        },
        /**
         * add or subtract some time to a Date object
         * 在一个日期上加减时间
         * @param {Date} date 日期对象
         * @param {number} diff 差值（毫秒）
         * @returns {Data} 作差之后的日期对象
         */
        diffDate: function (date, diff) {
            return new Date(aqua.UTC(date) + diff);
        },
        /**
         * 将Date对象转换为 UTC 时间 毫秒数
         * convert Date object to UTC time millionseconds
         * @param {Date} date
         * @returns {number}
         */
        UTC: function (date) {
            return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
        },
        /**
         * format a Date object
         * 将 Date 转化为指定格式的String
         * @param {Date} date 源日期对象
         * @param {string} pattern 匹配模式
         * @returns {string} 格式化结果
         */
        fmtDate: function (date, pattern) {
            return pattern
                .replace(/yyyy/, date.getFullYear().toString())
                .replace(/MM/, aqua.fillZero(date.getMonth() + 1, 'l', 2))
                .replace(/dd/, aqua.fillZero(date.getDate(), 'l', 2))
                .replace(/hh/, aqua.fillZero(date.getHours(), 'l', 2))
                .replace(/mm/, aqua.fillZero(date.getMinutes(), 'l', 2))
                .replace(/ss/, aqua.fillZero(date.getSeconds(), 'l', 2))
                .replace(/S/, date.getMilliseconds().toString());
        },
        /**
         * compare to two date ,caculate the difference
         * 对比两个日期，计算他们的差值
         * @param {Date} date1
         * @param {Date} date2
         * @returns {TimeSpan}
         */
        compareDate: function (date1, date2) {
            var number1 = aqua.UTC(date1);
            var number2 = aqua.UTC(date2);
            var isPositive = number2 > number1;
            number1 = Math.abs(number1);
            number2 - Math.abs(number2);
            var res = new TimeSpan(Math.abs(number2 - number1));
            res.isPositive = isPositive;
            return res;
        },
        /**
         * fill 0 to a number
         * 数字补零
         * @param {number} src 源数字
         * @param {string} direction 方向 l r
         * @param {number} digit 补零后的总位数
         * @returns {string} 结果
         */
        fillZero: function (src, direction, digit) {
            var count = digit - src.toString().length;
            var os = new Array(count + 1).join('0');
            if (direction !== 'r') {
                return os + src;
            }
            return src + os;
        }
    };
    return aqua;
})();
