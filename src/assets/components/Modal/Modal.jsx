import { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { personGrades } from "../../../Data";
import { useMyContext } from "../../hooks/myContext";
import { v4 as uuidv4 } from "uuid";
import "./modal.scss";

export function Modal({ Visible, onClose }) {
  const modalRef = useRef(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const { students, setStudents } = useMyContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validInputs()) {
      createStudent();
    }
  };

  const validInputs = () => {
    if (name !== "" && lastName !== "") return true;
    alert("Please fill in both fields");
  };

  useOnClickOutside(modalRef, () => onClose());

  const createStudent = () => {
    const id = uuidv4();

    const student = {
      name: name,
      lastName: lastName,
      grades: personGrades,
      id: id,
    };

    setStudents([...students, student]);
    setName("");
    setLastName("");
    onClose(false);
  };

  if (!Visible) {
    return <></>;
  }

  return (
    <div className="modal-wrapper">
      <form className="modal-Form" onSubmit={handleSubmit}>
        <p>new student</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <button className="btn btn__active">Add student</button>
      </form>
    </div>
  );
}
