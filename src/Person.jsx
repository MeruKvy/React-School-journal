import { React, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const Person = ({ name, lastName, grades, subjectIndex, weekIndex }) => {
  const [editingScoreIndex, setEditingScoreIndex] = useState(-1);
  const [newScore, setNewScore] = useState(0);
  const inputRef = useRef(null);

  const handleUpdate = (score, index) => {
    grades[subjectIndex][weekIndex][index] = score;
  };

  const focusInput = (index) => {
    setEditingScoreIndex(index);
    setTimeout(() => inputRef.current.focus(), 0);
  };

  return (
    <div className="person-container">
      <div className="student-names">
        <p className="plate">{name}</p>
        <p className="plate">{lastName}</p>
      </div>
      <div className="student-grades">
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
                onChange={(e) => setNewScore(e.target.value)}
                type="text"
                ref={inputRef}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUpdate(newScore, index);
                    setEditingScoreIndex(-1);
                  }
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
