var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empCode + ' ' + _this.empName); };
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var emp = new Employee(1, 'Ram');
emp.display();
