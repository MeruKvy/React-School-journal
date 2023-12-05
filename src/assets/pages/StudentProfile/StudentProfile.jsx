import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useMyContext } from "../../hooks/myContext";
import { Grades } from "../../components";
const StudentProfile = () => {
  const { id } = useParams();
  const { students } = useMyContext();
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
  });

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="studentProfile__person">
        <h1 className="text-5xl border border-2 border-black rounded w-fit">
          {chosenStudent.name} {chosenStudent.lastName}{" "}
        </h1>
        <div className="studentProfile__person__grades">
          {chosenStudent.grades?.map((week, index) => (
            <div className="border-2 border-solid border-black rounded mb-1 flex">
              <h1>Week {index + 1}</h1>
              <Grades
                subject={"Georgian"}
                index={0}
                week={chosenStudent.grades[index]}
              />
              <Grades
                subject={"Math"}
                index={1}
                week={chosenStudent.grades[index]}
              />
              <Grades
                subject={"English"}
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
