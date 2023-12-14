import React, { useState, useEffect } from "react";
import "./index.scss";

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <p className="error">
      Oups, une erreur est survenue, veuillez réessayer plus tard...
    </p>
  );
};
