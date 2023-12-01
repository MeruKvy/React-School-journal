import React, { useEffect } from "react";
import { useState } from "react";
import "./studentProfile.scss";
import { useParams } from "react-router";
import { useMyContext } from "../../hooks/myContext";
import   subjectGrades  from "../../components/subjectGrades/subjectGrades"

const StudentProfile = () => {
  const { id } = useParams();
  const { students, setStudents } = useMyContext();
  const [chosenStudent, setChosenStudent] = useState({
    name: "Couldn't find chosen student. ;/",
  });

  const getStudent = (identifier) => {
    const filteredStudent = students.filter(
      (student) => student.id === identifier
    );
    console.log(filteredStudent);
    setChosenStudent(filteredStudent[0]);
  };

  useEffect(() => {
    getStudent(id);
  }, []);

  return (
    <div className="studentProfile">
      <div className="studentProfile__person">
        <h1 className="studentProfile__person__name">
          {chosenStudent.name} {chosenStudent.lastName}{" "}
        </h1>
        <div className="studentProfile__person__grades">
          {chosenStudent.grades?.map((week, index) => (
            <div className="studentProfile__person__grades__week">
              <h1>Week {index + 1}</h1>
              <subjectGrades
                subject={"georgian"}
                index={0}
                week={chosenStudent.grades[index]}
              />
              <subjectGrades
                subject={"math"}
                index={1}
                week={chosenStudent.grades[index]}
              />
              <subjectGrades
                subject={"english"}
                index={2}
                week={chosenStudent.grades[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
