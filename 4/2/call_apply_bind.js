const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function(city,Food) {
      return this.firstName + " " + this.lastName + " " + city+" "+ Food;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let arr = ["Shimla", "Banana"]
  
  let f_name = person.fullName.bind(member);
  console.log(f_name("Delhi","Apple"));

  let food = person.fullName.apply(member,arr);
  console.log(food);
  let cty = person.fullName.call(member,"chandigarh");
  console.log(cty);
  
  
  
  