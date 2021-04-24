const Employee = require("./Employee");

class Intern extends Employee{
    constructor(role, name, email, github, school) {
        super(name, email, github, school)
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
    // getName(){
    //     return this.name;
    // }
    // getEmail(){
    //     return this.email;
    // }
    getSchool(){
        return this.school;
    }
    
}

module.exports = Intern; 