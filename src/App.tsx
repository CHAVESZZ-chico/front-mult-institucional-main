import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Utility from "./pages/Utility";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
          }
        />
        <Route
          path="/utility"
          element={
            <Utility isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
