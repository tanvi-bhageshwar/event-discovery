import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-page">
            <section className="about-hero">
                <h1>About Us</h1>
                <p>
                    We are a student-driven event management platform dedicated to
                    organizing technical, cultural, and sports events that inspire
                    innovation, creativity, and teamwork.
                </p>
            </section>

            <section className="about-content">
                <div className="about-card">
                    <h2>🎯 Our Mission</h2>
                    <p>
                        To create a dynamic environment where students can showcase
                        their talents, develop leadership skills, and connect through
                        meaningful events.
                    </p>
                </div>

                <div className="about-card">
                    <h2>🚀 Our Vision</h2>
                    <p>
                        To become a leading campus event platform that promotes
                        innovation, inclusivity, and excellence across all domains.
                    </p>
                </div>

                <div className="about-card">
                    <h2>🏆 What We Do</h2>
                    <p>
                        We organize hackathons, coding competitions, cultural festivals,
                        sports tournaments, workshops, and networking sessions throughout
                        the academic year.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;