function User(name, age) {
  this.name = name;
  this.age = age;
  this.compare = function(user) {
    if (this.age > user.age)
      alert(this.name + " is older than " + user.name);
    else if (user.age > this.age)
      alert(user.name + " is older than " + this.name);
    else
      alert(user.name + " and " + this.name + " have same age.");
  }
}

var user1 = new User("Hary", 13);
var user2 = new User("Mary", 13);
user1.compare(user2);