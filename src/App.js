import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Person from "./Person";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Jhon",
      lastName: "whick",
      grades: [[8, 10, 11, 29, 5], ["-", "-", "-", "5", 6], []],
      id: "011",
    },
  ]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");

  const createStudent = () => {
    const id = uuidv4();

    const student = {
      name: name,
      lastName: lastName,
      grades: [[], [], []],
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
              <button>Georgian</button>
              <button>Math</button>
              <button>English</button>
            </div>
          </div>
          <div>
            <p>Firter</p>
            <div className="row">
              <button>Week 1</button>
              <button>Week 2</button>
              <button>Week 3</button>
            </div>
          </div>
        </div>
        <div className="student-container">
          {students.map((student) => (
            <Person
              name={student.name}
              lastName={student.lastName}
              grades={student.grades}
              key={student.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
