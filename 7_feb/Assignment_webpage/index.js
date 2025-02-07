
    let s_name;
    let s_grade;
    let Students_arr = [];
    let studentCount = 0;

    function Clickme() {
        function student() {
            this.name = s_name;
            this.grade = s_grade;
        }

        s_name = document.getElementById("name").value;

        
        if (Students_arr.some(student => student.name === s_name)) {
            alert("Student with this name already exists!");
            return; 
        }

        let marks = [];
        
        for (let i = 1; i <= 5; i++) {
            let in_mar = parseFloat(document.getElementById(`marks${i}`).value);
            if (in_mar >= 30 && in_mar <= 100) {
                marks.push(in_mar);
            } else {
                marks.push(0);
            }
        }

        let total = marks[0];
        for (let i = 0; i < marks.length - 1; i++) {
            total += marks[i + 1];
        }

        s_grade = (total / 500) * 100;

        let studentObj = new student(s_name, s_grade);
        Students_arr.push(studentObj);
        studentCount++;

        
        document.getElementById("name").value = "";
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`marks${i}`).value = "";
        }

        
        updateStudentList();
    }

    function updateStudentList() {
        const studentListDiv = document.getElementById("studentList");
        studentListDiv.innerHTML = "<h2>All Students:</h2>";
        let studentListHTML = "<ul>";
        Students_arr.forEach(student => {
            studentListHTML += `<li>${student.name} - Grade: ${student.grade.toFixed(2)}%</li>`;
        });
        studentListHTML += "</ul>";
        studentListDiv.innerHTML += studentListHTML;
    }

    function topStudent() {
        if (Students_arr.length === 0) {
            document.getElementById('topStudentInfo').innerHTML = "No students found.";
            return;
        }

        let topStudent = Students_arr.reduce((max, student) => student.grade > max.grade ? student : max);

        // Displaying the top student info on the web page
        document.getElementById('topStudentInfo').innerHTML = `Top Student: ${topStudent.name} with grade: ${topStudent.grade.toFixed(2)}%`;
    }
