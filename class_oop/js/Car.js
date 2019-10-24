class Car {
    setTime(time){
        this.nTime = time;
    }
    setCar(car){
        this.nTime = car;
    }
    getTime(){
        console.log(this.nTime);
    }
    getCar(){
        console.log(this.nTime);
    }
    //Action 
    setSpeed(){
        const sp = prompt("Speed up");
    }
    getSpeed(){
        console.log(sp);
    }
}
const h2 = new Car();
h2.setTime("Lexus570");
h2.getTime();
const a3 = new Car();
a3.setCar("Rangrover");
a3.getCar();
const r5 = new Car();
r5.setSpeed("Toyota");
r5.getSpeed();