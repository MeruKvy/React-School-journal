import "./App.scss";
import { useState } from "react";
import Person from "../components/Person/Person";
import { Modal } from "../components/Modal/Modal";
import { useMyContext } from "../hooks/myContext";
import { exampleStudents } from "../Data";

function App() {
  const { students, setStudents } = useMyContext(); //USECONTEXTS VER AMOUGAMEBVS DEFAULT VALUE AR KIEWODEBA
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [weekIndex, setWeekIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Modal Visible={toggle} onClose={() => setToggle(false)} />
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
          <></>
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
