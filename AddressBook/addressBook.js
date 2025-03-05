//Create AddressBook class with constructor
class AddressBook{
    //Constructor 
    constructor(firstName, LastName, address, city, state, zip, phone, email){
        //Validate the inputs
        if(!this.validateFirstName(firstName)) throw "Invalid First Name";
        if(!this.validateLastName(LastName)) throw "Invalid Last Name";
        if(!this.validateAddress(address)) throw "Invalid Address";
        if(!this.validateCity(city)) throw "Invalid City";
        if(!this.validateState(state)) throw "Invalid State";
        if(!this.validateZip(zip)) throw "Invalid Zip";
        if(!this.validatePhone(phone)) throw "Invalid Phone";
        if(!this.validateEmail(email)) throw "Invalid Email";

        //Initialize instance 
        this.firstName = firstName;
        this.LastName = LastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    //Validate method for first name
    validateFirstName(firstName){
        return /^[A-z][a-z]{2,}$/.test(firstName);
    }

    //Validate method for last name
    validateLastName(LastName){
        return /^[A-z][a-z]{2,}$/.test(LastName);
    }

    //Validate method for address
    validateAddress(address){
        return /^[A-Z][A-za-z0-9\s]{4,}$/.test(address);
    }

    //Validate method for city
    validateCity(city){
        return /^[A-Z][a-z]{4,}$/.test(city);
    }

    //Validate method for state
    validateState(state){
        return /^[A-Z][A-Za-z\s]{4,}$/.test(state);
    }

    //Validate method for zip
    validateZip(zip){
        return /^[0-9]{6}$/.test(zip);
    }

    //Validate method for phone
    validatePhone(phone){
        return /^[0-9]{10}$/.test(phone);
    }

    //Validate method for email
    validateEmail(email){
        return /^[a-z0-9]+([._+-][a-z0-9]+)*@[a-z0-9]+.[a-z]{2,3}([.][a-z]{2})*$/.test(email);
    }
}


//Create object of AddressBook class and use try catch to handle exceptions
try{
    let addressbook1 = new AddressBook("Kanchan", "Singh", "LIG 635", "Bhopal", "Madhya Pradesh", 462022, 1234567890, "kanchu@gmail.com");
    console.log(addressbook1);  //Print the object
}catch(error){
    console.error(error);
}