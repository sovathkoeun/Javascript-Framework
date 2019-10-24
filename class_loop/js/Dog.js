 import Animal from './Animal.js';
  class Dog extends Animal {
     bite(){
         console.log("dog is run faster than dark");
     }
     break(){
         console.log("dog is run slowly than hourse ");
     }
 }
 const g = new Dog();
 g.walk();
 g.run();
 g.bite();