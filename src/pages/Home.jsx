
// import React from "react";
// import "./Home.css";
// import TechImg from "./OIP.webp";
// import culturalphoto from "./cultural.webp";
// import Techfestimg from "./techfestimmg.webp";
import React from "react";
import "./Home.css";
import TechImg from "./OIP.webp";
import culturalphoto from "./cultural.webp";
import Techfestimg from "./techfestimmg.webp";
function Home() {
  return (
    <>
      <section className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Discover Life at UMIT</h1>
            <p>
              Join the vibrant community of Usha Mittal Institute of Technology.
            </p>
            <p>
              Find workshops, cultural festivals, sports, and more.
            </p>

            <button className="browse-btn">Browse Events</button>
          </div>
        </div>
      </section>
      <div className="upcomingevents">
        <h2>Upcoming-Events</h2>
      </div>

      <div className="events-container">
        <div className="event-card">
          <img src={Techfestimg} alt="Tech Fest" />
          <h3> Tech Fest 2026</h3>
          <p>March 20,2026</p>
          <button>View Details</button>
        </div>

        <div className="event-card">
          <img src={culturalphoto} alt="Arcanes Illusion" />
          <h3> Arcanes ILlusion 2026</h3>
          <p>April 5&6,2026</p>
          <button>View Details</button>
        </div>

        <div className="event-card">
          <img src={TechImg} alt="Xuberance Week" />
          <h3> Xuberance Week 2026</h3>
          <p>February 22-28,2026</p>
          <button>View Details</button>
        </div>
      </div>

    </>
  );
}

export default Home;
