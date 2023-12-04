import React from "react";
import "./test.scss";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid"; /// mgoni konteqstshi unda shevinaxot braci

const Grades = ({ subject, index, week }) => {
  
  const inputRef = useRef(null);


  return (
    <div>
      <div className="Student__subject">
        <p>{subject}</p>
      </div>
      <div>
        {week[index].map((grade) => (
          <button key={uuidv4()} className="plate">{grade}</button>
        ))}
      </div>
    </div>
  );
};

export default Grades;
