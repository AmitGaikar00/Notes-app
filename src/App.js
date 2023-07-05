import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handletheme = () => {
    setDarkMode(!darkMode);
    console.log("clicked");
  };

  return (
    <main className={`${darkMode ? "dark" : ""} `}>

      <Header handleChange={handletheme} />
      <Banner />

    </main>
  );
}

export default App;
