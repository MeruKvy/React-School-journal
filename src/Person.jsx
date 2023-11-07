import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Person = ({ name, lastName, grades, key, subject }) => {
  const [edit, setEdit] = useState(false);
  const [selectedScore, setSelectedScore] = useState("");
  return (
    <div className="person-container">
      <div className="student-names">
        <p className="plate">{name}</p>
        <p className="plate">{lastName}</p>
      </div>
      <div className="student-grades">
        {grades[0].map((grade) => (
          <button
            onClick={() => {
              setEdit(true);
            }}
            className="plate"
          >
            {edit ? <input /> : grade}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Person;
