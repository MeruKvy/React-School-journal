import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main, StudentProfile} from "./assets/pages";
import ErrorPage from "./assets/pages/ErrorPage/ErrorPage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<StudentProfile />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
