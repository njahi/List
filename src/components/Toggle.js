import React from "react";
import "./Toggle.css";

export default function Toggle() {
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  return (
    <div>
      <h2>Toggle Dark/Light Mode</h2>
      <p>
        Click the button to toggle between dark and light mode for this page.
      </p>

      <button onclick={myFunction}>Toggle dark mode</button>
    </div>
  );
}
