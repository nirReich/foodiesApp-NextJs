"use client";
import React from "react";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>An error accrued!</h1>
      <p>{error}</p>
    </main>
  );
};

export default Error;
