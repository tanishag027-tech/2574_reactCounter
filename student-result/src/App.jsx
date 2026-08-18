import React from "react";

const students = [
  { id: 1, name: "Aman", marks: 85, course: "BCA", attendance: 92 },
  { id: 2, name: "Riya", marks: 45, course: "BCA", attendance: 78 },
  { id: 3, name: "Karan", marks: 72, course: "BBA", attendance: 55 },
  { id: 4, name: "Neha", marks: 30, course: "BCA", attendance: 95 },
  { id: 5, name: "Arjun", marks: 92, course: "BBA", attendance: 40 },
  { id: 6, name: "Sonia", marks: 55, course: "BCA", attendance: 65 }
];

function App() {
  return (
    <div>
      <h2>Student Result Table</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
            <th>Attendance</th>
            <th>Final Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => {
            let status;

            if (student.marks <= 50) {
              status = "Fail";
            } else if (student.attendance < 60) {
              status = "Attendance Shortage";
            } else {
              status = "Pass";
            }

            return (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.marks}</td>
                <td>{student.attendance}%</td>
                <td>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
