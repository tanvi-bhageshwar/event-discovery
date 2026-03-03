import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

function Calendar() {
  const events = [
    { title: "Tech Fest 2026", date: "2026-03-20" },
    { title: "Cultural Fiesta", date: "2026-04-05" },
    { title: "Sports Meet", date: "2026-04-18" },
  ];

  return (
    <div className="calendar-page">
      <h1>Event Calendar</h1>

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
      />
    </div>
  );
}

export default Calendar;