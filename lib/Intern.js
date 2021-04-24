const Employee = require("./Employee");

class Intern extends Employee{
    constructor(role, name, email, github, school) {
        super(name, email, github)
        this.github = github;
        this.role = role;
        this.school = school;
        this.name = name; 
        this.email = email; 
    }
    getRole(){
        return "Intern";
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getSchool(){
        return school;
    }
    
}

module.exports = Intern; 