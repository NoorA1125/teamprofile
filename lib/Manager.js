const Employee = require("./Employee");

class Manager{
    constructor(role,name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

module.exports = Manager; 