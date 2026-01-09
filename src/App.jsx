import React from "react";
import "./App.css";
import Tasks from "./Tasks";

export default function App() {
  return (
    <div>
      <div className="mainbox">
        <div className="headerbox">
          <p>Habitracker</p>
          <p>Time</p>
          <div className="settings">
            <p>streak</p>
            <p>settings</p>
          </div>
        </div>
        <div className="contentbox">
          <div className="tasks">
            <Tasks></Tasks>
          </div>
          <div className="calendar">calendar</div>
        </div>
      </div>
    </div>
  );
}
