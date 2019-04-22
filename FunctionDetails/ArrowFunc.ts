// Fat Arrow Function -without parameter
let Print = () => console.log("Hello Arrow!")

Print()

// Fat Arrow Function -with parameter
let add = (a:number,b:number):number =>
{
 return a+b
}
console.log(add(5,2))

// Arrow Function in Class
class Employee
{
    empCode:number
    empName:string

    constructor(code:number,name:string)
    {
        this.empCode=code
        this.empName=name
    }

    dispaly=()=>
    console.log(this.empCode+' '+this.empName)
}
let emp=new Employee(1,'Modi')
emp.dispaly();