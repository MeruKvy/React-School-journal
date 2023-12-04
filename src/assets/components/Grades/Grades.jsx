import React from "react";
import "./test.scss";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";/// mgoni konteqstshi unda shevinaxot braci


const Grades = ({ subject, index, week }) => {
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
    <div>
      <div className="Student__subject">
        <p>{subject}</p>
      </div>
      <div>
        {week[index].map((grade) => (
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
           )}\ 
           </button>
        ))}
      </div>
    </div>
  );
};

export default Grades;
