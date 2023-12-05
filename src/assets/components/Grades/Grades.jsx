import React from "react";
import { v4 as uuidv4 } from "uuid";

const Grades = ({ subject, index, week }) => {
  

  return (
    <div>
      <div className="flex justify-center mt-4">
        <p>{subject}</p>
      </div>
      <div>
        {week[index].map((grade) => (
          <button key={uuidv4()} className="plate">
            {grade}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Grades;
