/*!
 * welcome to use aqua toolbox！
 * @author　　：roketRobin
 * @summary　 ：bussines irrelevant、dom irrelevant、js useful function set
 * @version　 ：V0.1.0
 * @lisence   :Apache 2.0 http://www.apache.org/licenses/
 */
/**
 * TimeSpan just like the class TimpSpan in C# ,represent the time difference
 * @class TimeSpan
 */
declare class TimeSpan {
    constructor(millionseconds: number);
    totalDays: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
    totalMillionseconds: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millionsecond: number;
    /**
     * if the date2 later than date 1 ,it's true
     * @type {boolean}
     * @memberOf TimeSpan
     */
    isPositive: boolean;
}
declare class Aqua {
    /**
     * judge an object is a JSON object or not
     * 判断一个对象是否是Json对象
     * @param {any} obj
     * @returns {bool}
     */
    isJson(obj: any): boolean;
    /**
     * add or subtract some time to a Date object
     * 在一个日期上加减时间
     * @param {Date} date 日期对象
     * @param {number} diff 差值（毫秒）
     * @returns {Data} 作差之后的日期对象
     */
    diffDate(date: Date, diff: number): Date;
    /**
     * 将Date对象转换为 UTC 时间 毫秒数
     * convert Date object to UTC time millionseconds
     * @param {Date} date
     * @returns {number}
     */
    UTC(date: Date): number;
    /**
     * format a Date object
     * 将 Date 转化为指定格式的String
     * @param {Date} date 源日期对象
     * @param {string} pattern 匹配模式
     * @returns {string} 格式化结果
     */
    fmtDate(date: Date, pattern: string): string;
    /**
     * compare to two date ,caculate the difference
     * 对比两个日期，计算他们的差值
     * @param {Date} date1
     * @param {Date} date2
     * @returns {TimeSpan}
     */
    compareDate(date1: Date, date2: Date): TimeSpan;
    /**
     * fill 0 to a number
     * 数字补零
     * @param {number} src 源数字
     * @param {string} direction 方向 l r
     * @param {number} digit 补零后的总位数
     * @returns {string} 结果
     */
    fillZero(src: number, direction: string, digit: number): string;
}
/**
 * aqua 对象
 */
declare var aqua: Aqua;