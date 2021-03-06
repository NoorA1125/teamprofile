const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, email, id);
        this.github = github;
        this.role = "Engineer";
    }

    getRole() {
        return this.role;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer; 