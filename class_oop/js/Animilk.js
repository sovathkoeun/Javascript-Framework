class Animilk {
    //Setter
    setName(){
         this.mName = name;
    }
    //getName
    getName(){
        console.log(this.mName);
    }
    walk(){
        console.log("Walk step by step");
    }
    run(){
        console.log("Runing!!!")
    }
}
 
class Dog extends Animilk {
    bite (){
        console.log("Bite someone tonight!!!");
    }
}


const dogs = new Dog();
dogs.run();
dogs.walk();
dogs.bite();
dogs.setName("bopha");
dogs.getName();