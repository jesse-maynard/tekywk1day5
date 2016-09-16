var person = {
    firstName: "Jesse",
    lastName: "Maynard",
    email: "kurumu63@hotmail.com",
    phone: "606.626.6911",
    birthDay: "November 03 1994",
    fullName: function(){
        return this.firstName + " " + this.lastName; 
    }
}

function printDetails(p){
    if (typeof p.email != "undefined"){
        console.log(p.email);
    }
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.birthday);
    console.log(p.fullName());
}

printDetails(person);