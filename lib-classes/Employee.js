class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //this function will take name thats letters only using reg expressoion
    getName() {
        return this.name
    //     if (/[^a-zA-Z]/.test(this.name)) {
    //         console.log(`the ${this.name} meets input criteria`);
    //         return this.name
    //     } else {
    //         console.log(`the ${this.name} is invalid entry, use letters only.`);
    //         return false;
    //     }
    }

    //this function willl tqake in numbers onyl
    getId() {
        return this.id
    //     if (this.id.matches(/[^a-zA-Z]/)) {
    //         console.log(`the ${this.id} is available.`);
    //         return this.id
    //     } else {
    //         console.log(`Please input numeric characters only.`);
    //         return false;
    //     }
    }

    getEmail() {
        return this.email    
    //     if (/insertcharactereshere/.test(this.email)){
    //     return this.email;
    //     } else {
    //         console.log(`Please ihave entereed invaild email`);
    //         return false;
    //     }
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;