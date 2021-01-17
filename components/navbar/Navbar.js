import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-red-400 ">
      <div className="flex items-center justify-between max-w-screen-xl h-14">
        <div className="flex items-center"></div>
        <div className="flex items-center">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Events</a>
          <a href="">Contact</a>
        </div>
      </div>
    </nav>
  );
}
