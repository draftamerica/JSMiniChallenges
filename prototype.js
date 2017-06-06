function School () {
    console.log("==School==");
    console.log("this:", this);
    this.teacher = [];
    this.student = [];
}

function Person (fname, lname, email) {
    console.log("==Person==");
    console.log("this:", this);
    this.fname = fname;
    this.lname = lname;
    this.email = email;
}

// ==== STUDENT INHERIT ==== //
function Student (fname, lname, parents) {
    console.log("==Student==");
    console.log("this:", this);
    this.fname = fname;
    this.lname = lname;
    this.parents = parents;
    this.prototype = Object.create(Person.prototype);
    console.log("Student.prototype", Student.prototype);
}

//
// // ==== TEACHER INHERIT ==== //
console.log("==== new Teachers ====")
function Teacher(fname, lname, subject) {
    console.log("==Teacher==");
    console.log("this:", this);
    this.prototype = Object.create(Person.prototype);
    this.subject = subject;
}

// ==== ADD NEW STUDENTS ==== //
console.log("===== new Students =====");
var Stephen = new Student("Stephen", "Curry", "ballercurry@gmail.com");
var Bob = new Student("Bob", "Smith", "Amy and Tim");
console.log("Stephen:", "Bob:", Stephen, Bob);
var schoolBox = new School();
console.log(schoolBox);
School.prototype.studentList = function(newStudent) {
    console.log("==studentList==");
    this.student.push(newStudent);
}
schoolBox.studentList(Stephen);

// ==== ADD NEW TEACHERS ==== //
console.log("==== New teachers =====");
var Williams = new Teacher("Jim", "Williams", "Biology");
console.log("Williams", Williams);
School.prototype.teacherList = function(newTeacher) {
    console.log("==teacherList==");
    this.teacher.push(newTeacher);
}
schoolBox.teacherList(Williams);
