import React from "react";
import "./App.css";
import Tasks from "./Tasks";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function App() {
  const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"]
  const newdate = new Date();
  const date = newdate.getDate();
  const month = newdate.getMonth();
  const day = newdate.getDay();
  return (
    <div>
      <div className="mainbox">
        <div className="header">
          <div className="headerbox">
            <h1>Habitracker</h1>
            <p>{days[day] + " , " + months[month] +" "+ date }</p>
            <div className="settings">
              <p>🔥</p>
              <p>⚙️</p>
            </div>
          </div>
        </div>
        <div className="contentbox">
          <div className="tasksmainbox">
            <Tasks></Tasks>
          </div>
          <div className="rightbox">
            <div className="calendar">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  left: 'prev',
                  center: 'title',
                  right: 'next'
                }}
                height="50vh"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
