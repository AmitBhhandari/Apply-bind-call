var obj={NAME:'AMIT'}

var addToThis= function (address,age,SDE){
   return this.NAME+' '+address+' '+age+' '+SDE;
}
//using call
var added=addToThis.call(obj,'Uttarakhand');
console.log(added);

//using apply 
var arr=['uttarakhand',24,'FE'];
var newAdded=addToThis.apply(obj,arr);
console.log(newAdded);

//using bind
var bound=addToThis.bind(obj)
var bindcommand=bound('uttarakhand',24,'FE');
console.log(bindcommand);


//new object

var Student = {
    age: 20
};

function printAge() {
    console.log(this.age);
}

var print = printAge.bind(Student);
print();
