import React from "react";

const subjectGrades = ({subject, index, week}) => {
  return (
    <div>
      <p>{subject}</p>
      <div>
        {week[index].map((grade) => (
          <p className="plate">{grade}</p>
        ))}
      </div>
    </div>
  );
};

export default subjectGrades;
