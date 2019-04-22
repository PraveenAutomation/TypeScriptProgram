// Fat Arrow Function -without parameter
var Print = function () { return console.log("Hello Arrow!"); };
Print();
// Fat Arrow Function -with parameter
var add = function (a, b) {
    return a + b;
};
console.log(add(5, 2));
// Arrow Function in Class
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.dispaly = function () {
            return console.log(_this.empCode + ' ' + _this.empName);
        };
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(1, 'Modi');
emp.dispaly();
