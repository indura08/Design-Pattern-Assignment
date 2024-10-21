class Admin {
    static admin: Admin;

    private constructor(){

    }

    public static createInstance():Admin{
        if(!Admin.admin){
            Admin.admin = new Admin();

        }
        return Admin.admin;
    }

    public showAdmin():void{
        console.log("this is admin speaking");
    }

}

const admin2 = Admin.createInstance();
const admin3 = Admin.createInstance();

console.log(admin2 === admin3)

class User {
    name:string;
    mehtod1():void{
        console.log("hello");
    }
}

const user = new User();


