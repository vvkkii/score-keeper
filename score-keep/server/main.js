
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

  // class Person {
  //    constructor(name = 'Anonymous', age = 0) {
  //      this.name = name;
  //      this.age = age;
  //    }
  //    getGreeting() {
  //     return `Hi I am ${this.name}.`;
  //    }
  //    getPersionDesciption() {
  //      return `${this.name} is ${this.age} years old.`;
  //     }
  // }
  // class Employee extends Person {
  //   constructor (name,age,title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   getGreeting() {
  //      if(this.title) {
  //        return `Hi I am ${this.name}.I work as a ${this.title}`;
  //      } else {
  //        return super.getGreeting();
  //    }
  //  }
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor (name, age, preferredLanguage = 'assembly') {
  //     super(name,age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting (){
  //     return `I am a ${this.preferredLanguage} developer`
  //   }
  // }
  // let user1 = new Programmer ('A',25,'JS');
  // console.log(user1.getGreeting());

  //let square = (x) =>   x * x;
//  console.log(square(10)); //show in terminal

 //  let user = {
 //    name :'A',
 //    sayHi() {
 //
 //        setTimeout(() => {
 //          console.log(this.name);
 //        },1000);
 //    }
 //  };
 // user.sayHi(1,2);
  // let numbers = [9,99,4,56];
  // let newNumbers = numbers.map((number) =>  number + 1);
  // console.log(newNumbers);

});
