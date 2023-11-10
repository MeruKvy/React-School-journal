import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Person from "./Person";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Jhon",
      lastName: "whick",
      grades: [
        [
          [8, 10, 11, 29, 5],
          ["-", "4", "-", "5", 6],
          ["4", "11", 10, "-", "-"],
        ],
        [
          [10, "-", 11, 8, "-"],
          [10, "-", 11, 8, "-"],
          ["-", "-", "-", "-", "-"],
        ],
        [
          [10, "-", 11, 8, "-"],
          [10, "-", 11, 8, "-"],
          ["-", "-", "-", "-", "-"],
        ],
      ],
      id: "011",
    },
  ]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [weekIndex, setWeekIndex] = useState(0);

  const createStudent = () => {
    const id = uuidv4();

    const student = {
      name: name,
      lastName: lastName,
      grades: [
        [
          ["-", "-", "-", "-", "-"],
          ["-", "-", "-", "-", "-"],
          ["-", "-", "-", "-", "-"],
        ],
        [
          ["-", "-", "-", "-", "-"],
          ["-", "-", "-", "-", "-"],
          ["-", "-", "-", "-", "-"],
        ],
        [
          ["-", "-", "-", "-", "-"],
          ["-", "-", "-", "-", "-"],
          ["-", "-", "-", "-", "-"],
        ],
      ],
      id: id,
    };

    setStudents(student.push(student));
  };

  return (
    <div className="App">
      <div>
        <div className="sort-container">
          <div>
            <p>Subjects</p>
            <div className="row">
              <button
                onClick={() => {
                  setSubjectIndex[0]
                  console.log(subjectIndex)
                }}
              >
                Georgian
              </button>
              <button onClick={() => setSubjectIndex[1]}>Math</button>
              <button onClick={() => setSubjectIndex[2]}>English</button>
            </div>
          </div>
          <div>
            <p>Firter</p>
            <div className="row">
              <button onClick={() => setWeekIndex[0]}>Week 1</button>
              <button onClick={() => setWeekIndex[1]}>Week 2</button>
              <button onClick={() => setWeekIndex[2]}>Week 3</button>
            </div>
          </div>
        </div>
        <div className="student-container">
          {students.map((student) => (
            <Person
              name={student.name}
              lastName={student.lastName}
              grades={student.grades}
              subjectIndex={subjectIndex}
              weekIndex={weekIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
