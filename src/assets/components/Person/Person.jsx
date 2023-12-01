import { React, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./person.scss";
const Person = ({ name, lastName, grades, id, subjectIndex, weekIndex }) => {
  const [editingScoreIndex, setEditingScoreIndex] = useState(-1);
  const [newScore, setNewScore] = useState("");
  const inputRef = useRef(null);

  const handleUpdate = (score, index) => {
    grades[subjectIndex][weekIndex][index] = score;
    setNewScore("");
  };

  const focusInput = (index) => {
    setEditingScoreIndex(index);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  return (
    <div className="person-container">
      <div className="student-names">
        <Link to={`${id}`} className="plate link">
          {name}
        </Link>
        <p className="plate">{lastName}</p>
      </div>
      <div className="person-container__student-grades">
        {grades[subjectIndex][weekIndex].map((grade, index) => (
          <button
            key={uuidv4()}
            onClick={() => {
              setEditingScoreIndex(index);
              focusInput(index);
            }}
            className="plate"
          >
            {editingScoreIndex === index ? (
              <input
                value={newScore}
                onChange={(e) => {
                  setNewScore(e.target.value);
                  focusInput(index);
                }}
                className="person-container__student-grades__input"
                ref={inputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUpdate(newScore, index);
                    setEditingScoreIndex(-1);
                  }
                }}
                onBlur={() => {
                  handleUpdate(newScore, index);
                  setEditingScoreIndex(-1);
                }}
              />
            ) : (
              grade
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Person;
