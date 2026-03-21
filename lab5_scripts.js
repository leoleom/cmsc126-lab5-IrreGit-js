/* LAB 5 - STUDENT MANAGEMENT SYSTEM */


let students = [];              // array for student records



/* MEMBER 1 - Generate current time 
MUST return the following in the format:

"Today is March 20, 2026, Friday.
The current time is 11:45 AM."      */

document.getElementById("date_btn").addEventListener("click", time_now);
function time_now(){
    console.log("Hatdog");    //testing purposes please delete



}


/* MEMBER 2 - Add object to the students array 
MUST create object named "Student" that stores 
properties in the array when submit is clicked     */
document.getElementById("submit_btn").addEventListener("click", add_student);
function add_student(){




}


/* MEMBER 3 - Search students through Student ID 
MUST display Student properties inputted by user
using Student ID and displays error when object 
does not exist                                      */ 
document.getElementById("search_btn").addEventListener("click", find_student);
function find_student(){




}

/* MEMBER 4 - Display properties of students 
MUST display all objects (values) in the array       */ 
document.getElementById("display_btn").addEventListener("click", display_list);
function display_list(){




}



// Blueprint for the Student object
class Student {
    constructor(studentNumber, name, age, email, course) {
        this.studentNumber = studentNumber;
        this.name = name;
        this.age = age;
        this.email = email;
        this.course = course;
    }
}

// Generate random and unique student_number ("2024" + 5 random digits) 
function generate_student_number() {
    let isUnique = false;
    let newId = "";
    
    while (!isUnique) {
        // Generate a random 5-digit number (between 10000 and 99999)
        let randomDigits = Math.floor(Math.random() * 90000) + 10000;
        newId = "2024" + randomDigits;

        // Check the global students array to see if this ID already exists
        let duplicate = students.find(student => student.studentNumber === newId);
        if (!duplicate) {
            isUnique = true; 
        }
    }
    return newId;
}

// Validate inputs from the users once entered
function validate_input(name, age, email, course) {
    // Check Name: > 5 chars and contains a whitespace
    if (name.length <= 5 || !name.includes(" ")) {
        return "Error: Name must be more than 5 characters and contain a space.";
    }
    // Check Age: > 18 and < 99
    if (isNaN(age) || age <= 18 || age >= 99) {
        return "Error: Age must be a number greater than 18 and less than 99.";
    }
    // Check Email: ends with @up.edu.ph
    if (!email.endsWith("@up.edu.ph")) {
        return "Error: Email must end with @up.edu.ph.";
    }
    // Check Course: make sure one is selected
    if (course === "") {
        return "Error: Please select a course.";
    }
    
    return "valid"; 
}