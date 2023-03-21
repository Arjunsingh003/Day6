
//Create a Movie Class.
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined){this.rating="PG"}
    }
    display (){
        console.log(`${this.title},${this.studio},${this.rating}`)
    }
   movieobject(){
    return ({title:this.title,
        studio:this.studio,
        rating:this.rating})

   }
   getgetPG(arr)
   {
    let data=arr.filter(film=>film.rating=="PG")
     console.log(data.map(b=>b.title))
   }
}
   let Movie1=new movie("Witch 3","Total P house")
   Movie1.display()
  let Movie2=new movie("Wakanda Forever","Lion","PG")
  let Movie3=new movie("Chronicles of Narnia","Movies3","PG")
  let Movie4=new movie("Ghost4","Dantown Films","PG")
  let film=new movie("Cats Life","Djs Productions","PG13")
 film.display()
  let arr=[]
   arr.push(Movie1.movieobject())
   arr.push(Movie2.movieobject())
   arr.push(Movie3.movieobject())
   arr.push(Movie4.movieobject())
   console.log(arr);


   //2.Create a Circle Class
   class Circle{
    constructor(color,radius){
        this.color=color;
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return this.color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        let area=(3.14*this.getRadius()*this.getRadius()).toFixed(2)
        return `"Area of circle is" ${area}`
    }
   getCircumference(){
       let circum=(2*3.14*this.getRadius()).toFixed(2)
       return `"Circumference of circle is" ${circum}`
   }
   display(){
       let str =  `[ radius : ${this.getRadius()} , color : ${this.getColor()}]`;
       return str;
   }
}
let circle1=new Circle();
let circle2=new Circle("red")
let circle3=new Circle(3,"green")
circle1.setRadius(6)
circle1.setColor("white")
circle2.setRadius(9)
console.log(circle1.display())
console.log(circle2.display())
console.log(circle3.getArea())
console.log(circle3.getCircumference())



//3. Write a “person” class to hold all the details.
class Person{
    constructor(name,heigth,weigth,age,colour,qualification,city, state){
        this.name=name;
        this.heigth=heigth;
        this.weigth=weigth;
        this.age=age;
        this.colour=colour;
        this.qualification=qualification;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log(`
        name:${this.name}
        height:${this.heigth}
        weight:${this.weigth}
        age:${this.age}
        color:${this.colour}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`)
    }
}
let Person1=new Person("Robert","6.6","90","32","Eastern ","MS","Aruba","Phoenix")
Person1.details()

//4. Creating a Uber Class
class Uber_Price {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *20;
    }
  }
  
  let uber = new Uber_Price(30);
  console.log(uber.getPrice());