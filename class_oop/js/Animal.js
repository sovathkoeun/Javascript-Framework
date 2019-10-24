class Animal{
      //Setter
      setName(name){
        this.mName = name;
      }
      //Getter
      getName(){
          console.log(this.mName);
      }
}
const a1 = new Animal();
a1.setName("kiki");
a1.getName();
const a2 = new Animal();
a2.setName("dog");
a2.getName();
const h = new Animal();
h.setName("dog is eat rice");
h.getName();