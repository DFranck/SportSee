import React, { useState, useEffect } from "react";
import "./index.scss";

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

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
      Oups, une Erreur est survenue, veuillez réessayer plus tard...
    </p>
  );
};
