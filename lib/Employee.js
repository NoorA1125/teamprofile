

class Employee { //Employee is an object with name, id, and an email

    constructor(name, id, email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() { //function to get the name within the employee class using "this" then name
        return this.name;
    }
    getId() { //function to get the id within the employee class using "this" then id
        return this.id;
    }
    getEmail() { //function to get the email within the employee class using "this" then email
        return this.email;
    }
    getRole() { //function to get the role within the employee class 
        return this.role;
    }

}

module.exports = Employee