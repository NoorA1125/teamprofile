const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(role, name, email, github) {
        super(name, email, github)
        this.github = github;
        this.role = role;
        this.name = name; 
        this.email = email;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Engineer; 