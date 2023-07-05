import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const handletheme = () => {
    setDarkMode(!darkMode);
    console.log("clicked");
  };

  return (
    <main className={`${darkMode ? "dark" : ""} `}>
      <Header handleChange={handletheme} />
      <Home />
    </main>
  );
}

export default App;
