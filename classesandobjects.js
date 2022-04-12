// object
// let student = 
// {
//     username : "shameel",
//     Name : "Shameel Abdul",
//     age : 25,
//     password: shameel,
//     phone: 4129614606
// }

// 10 students
// Properties
// Name
// DOB
// username
// Phone number
// isPythonSelected
// isMernSelected

class Student {
    // constructor, properties, methods
    constructor(name, Dob, username, phone, isPythonSelected, isMernSelected) {
        this.name = name;
        this.Dob = Dob;
        this.username = username;
        this.phone = phone;
        this.isPythonSelected = isPythonSelected,
        this.isMernSelected = isMernSelected
    }

    age() {
        // compute age
        return 30;
    }

    totalFees() {
        let Fee = 0
        if (this.isMernSelected)
        {
            Fee += 4500;
        }
        if (this.isPythonSelected)
        {
            Fee += 3000;
        }
        return Fee;
    }
}

let student1 = new Student('Shameel', '12/12/87', 'shameel', 4127776655, true, true);
let student2 = new Student('David', '12/12/87', 'shameel', 4127776655, false, true);
let student3 = new Student('Sadat', '12/12/87', 'shameel', 4127776655);
let student4 = new Student('Alex', '12/12/87', 'shameel', 4127776655);

let studentArr = [student1, student2, student3, student4];
console.log(studentArr);
console.log(studentArr[1].totalFees());