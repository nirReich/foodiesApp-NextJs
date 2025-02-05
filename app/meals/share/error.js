"use client";
import React from "react";


const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>Faild to create meal!!</h1>
      <p>{error}</p>
    </main>
  );
};

export default Error;
