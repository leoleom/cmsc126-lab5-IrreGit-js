/* LAB 5 - STUDENT MANAGEMENT SYSTEM */


let students = [];              // array for student records



/* MEMBER 1 - Generate current time 
MUST return the following in the format:

"Today is March 20, 2026, Friday.
The current time is 11:45 AM."      */

document.getElementById("date_btn").addEventListener("click", time_now);
function time_now(){
    const now = new Date();

    const date = now.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
    const wd = now.toLocaleDateString('en-US', {weekday: 'long'})
    const time = now.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});

    const msg = `Today is ${date}, ${wd}. \nThe current time is ${time}.`;

    document.getElementById("time_output").innerText = msg;
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



/* OPTIONAL FOR MEMBERS: Utility methods (leave blank if you don't want to do this :< ) */

// generate a random student_number ("2024" + 5 random digits) 
function generate_student_number() {




}

// validate inputs from the users once entered (maybe make sure no duplicates?)
function validate_input(name, age, email, course){

}