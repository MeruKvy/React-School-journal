import "./App.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Person from "./Person";
import { exampleStudents } from "./Data";
import { personGrades } from "./Data";

function App() {
  const [students, setStudents] = useState(exampleStudents);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [weekIndex, setWeekIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const createStudent = () => {
    const id = uuidv4();

    const student = {
      name: name,
      lastName: lastName,
      grades: personGrades,
      id: id,
    };

    setStudents([...students, student]);
    setToggle(false)
    setName("")
    setLastName("")
  };

  return (
    <div className="App">
      <div className="content-spacer">
        <div className="sort-container">
          <div>
            <p>Subjects</p>
            <div className="row">
              <button
                className={
                  subjectIndex === 0 ? "btn btn__active" : "btn btn__normal"
                }
                onClick={() => {
                  setSubjectIndex(0);
                }}
              >
                Georgian
              </button>
              <button
                className={
                  subjectIndex === 1 ? "btn btn__active" : "btn btn__normal"
                }
                onClick={() => {
                  setSubjectIndex(1);
                }}
              >
                Math
              </button>
              <button
                className={
                  subjectIndex === 2 ? "btn btn__active" : "btn btn__normal"
                }
                onClick={() => {
                  setSubjectIndex(2);
                }}
              >
                English
              </button>
            </div>
          </div>
          <div>
            <p>Firter</p>
            <div className="row">
              <button
                className={
                  weekIndex === 0 ? "btn btn__active" : "btn btn__normal"
                }
                onClick={() => setWeekIndex(0)}
              >
                Week 1
              </button>
              <button
                className={
                  weekIndex === 1 ? "btn btn__active" : "btn btn__normal"
                }
                onClick={() => setWeekIndex(1)}
              >
                Week 2
              </button>
              <button
                className={
                  weekIndex === 2 ? "btn btn__active" : "btn btn__normal"
                }
                onClick={() => setWeekIndex(2)}
              >
                Week 3
              </button>
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
        {toggle ? (
          <form onSubmit={handleSubmit}>
            <p>new student</p>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <button className="btn btn__active" onClick={() => createStudent()}>
              Add student
            </button>
          </form>
        ) : (
          <button className="btn btn__active" onClick={() => setToggle(true)}>
            Add New Student
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
