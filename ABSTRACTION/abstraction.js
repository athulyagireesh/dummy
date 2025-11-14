class Car{
    Carstart(){
        this.#Speedometer()
        this.#Enginestart()
        console.log("the vehicle is ready to drive")
    }
    #Enginestart(){
        console.log("the engine of vehicle is started")
    }
    #Speedometer(){
        console.log("the speedometer is activated")
    }
}

let obj1=new Car();
obj1.Carstart();
