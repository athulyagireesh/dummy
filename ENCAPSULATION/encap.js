class Student{
    #age;
    constructor(name,age){
        this.name=name;
        this.#age=age;
    }

    setAge(age){
        this.#age=age;
    }

    getAge(){
        return this.#age;
    }

}

let obj1=new Student("athulya",21)

console.log(obj1.name)
console.log(obj1.getAge())

obj1.name="desny"
obj1.setAge(20);

console.log(obj1.name)
console.log(obj1.getAge())
