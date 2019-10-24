export default class Animal{
    setName(name){
        this.mName = name;
    }
    getName(){
        console.log(this.mName);
    }
    walk(){
        console.log("dog go to walk play");
    }
    run(){
        console.log("dog is run faster than ")
    }
}
const to = new Animal();
to.setName("lok");
to.getName();
to.walk();
to.run();