import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Loginpage.jsx";
import HomePage from "./pages/Homepage.jsx";
import AuthButton from "./components/AuthButton.jsx";

function App() {
  return (
    <Router>
      <div>
        <header style={styles.header}>
          <h1>Google Integration Portal</h1>
          <AuthButton />
        </header>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f1f1f1",
  },
};

export default App;
