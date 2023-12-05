import { React, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

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
      <div className="flex" >
        <Link to={`${id}`} className="hover:border hover:bg-blue-800 hover:text-[white] hover:border-solid hover:border-[gray] plate">
          {name}
        </Link >
        <p className="plate">{lastName}</p>
      </div>
      <div className="flex">
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
                className="w-6 bg-transparent border-2 border-transparent focus:outline-none outline-none focus:ring-0"
                value={newScore}
                onChange={(e) => {
                  setNewScore(e.target.value);
                  focusInput(index);
                }}
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
