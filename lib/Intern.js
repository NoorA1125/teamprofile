const Employee = require("./Employee");

class Intern extends Employee{
    constructor(role, name, email, github) {
        super(name, email, github)
        this.github = github;
        this.role = role;
    }
}

module.exports = Intern; 