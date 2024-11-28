import React from "react";

export const isNightTime = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 18 || currentHour < 6;
};

// How to use in a component //
// import React, { useState, useEffect } from "react";
// import { isNightTime } from "./utils";

// const MyComponent = () => {
//  const [isDarkMode, setIsDarkMode] = useState(false);

//  useEffect(() => {
//    setIsDarkMode(isNightTime());
//  }, []);

//  return (
//    <div style={{ backgroundColor: isDarkMode ? "#333" : "#FFF", color: isDarkMode ? "#FFF" : "#000" }}>
//      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
//    </div>
//  );
//};

// export default MyComponent;