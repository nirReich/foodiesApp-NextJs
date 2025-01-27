import React from "react";
import Link from "next/link";

const NotFound = () => {
  return <main className="not-found">
    <h1>Page Not Found!</h1>
    <Link href='/'><p>Back Home</p></Link>
  </main>;
};

export default NotFound;
