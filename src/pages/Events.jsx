import { useState } from "react";
import "./Events.css";

function Events() {
    const [category, setCategory] = useState("All");
    const eventsData = [
        {
            id: 1,
            title: "Tech Fest 2026",
            category: "Technical",
            date: "March 20, 2026",
            description: "Coding competitions and hackathons."
        },
        {
            id: 2,
            title: "Football Tournament",
            category: "Sports",
            date: "April 10, 2026",
            description: "Inter-college football competition."
        },
        {
            id: 3,
            title: "Cultural Fiesta",
            category: "Cultural",
            date: "April 5, 2026",
            description: "Dance, music and drama performances."
        }
    ];

    const filteredEvents =
        category === "All"
            ? eventsData
            : eventsData.filter(event => event.category === category);
    return (
        <div className="events-page">
            <h1>All Events</h1>

            {/* Filter Buttons */}
            <div className="filters">
                <button onClick={() => setCategory("All")}>All</button>
                <button onClick={() => setCategory("Technical")}>Technical</button>
                <button onClick={() => setCategory("Sports")}>Sports</button>
                <button onClick={() => setCategory("Cultural")}>Cultural</button>
            </div>

            {/* Events List */}
            <div className="events-container">
                {filteredEvents.map(event => (
                    <div key={event.id} className="event-card">
                        <h3>{event.title}</h3>
                        <p><strong>Date:</strong> {event.date}</p>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Events;