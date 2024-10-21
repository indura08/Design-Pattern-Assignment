var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.createInstance = function () {
        if (!Admin.admin) {
            Admin.admin = new Admin();
        }
        return Admin.admin;
    };
    Admin.prototype.showAdmin = function () {
        console.log("this is admin speaking");
    };
    return Admin;
}());
var admin2 = Admin.createInstance();
var admin3 = Admin.createInstance();
console.log(admin2 === admin3);
