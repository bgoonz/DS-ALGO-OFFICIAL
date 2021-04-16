
var Person = function(firstAndLast) {
    var firstName = [...firstAndLast.split(' ')][0];
    var lastName = [...firstAndLast.split(' ')][1];
    this.setFirstName = (first) => firstName = first;
    this.setLastName = (last) => lastName = last;
    this.setFullName = function(full) {
        var fullName = [...full.split(' ')];
        firstName = fullName[0];
        lastName = fullName[1];
    };
    this.getFullName = () => firstName + ' ' + lastName;
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
};

var bob = new Person('Bob Ross');
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());

