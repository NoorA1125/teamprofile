const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(role, name, email, github) {
        super(name, email, github)
        this.github = github;
        this.role = role;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer; 