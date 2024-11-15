import React, { useState, useEffect } from "react";

export const ScrollReader = () => {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventLitener("scroll", handleScroll);
  }, []);
};
