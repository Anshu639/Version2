import React from "react";
import { Link } from "react-router-dom";
import "./css/Events.css"; // Import the CSS file
import trainingImg from "../Images/training.jpg";
import competitionsImg from "../Images/training.jpg";

const Events = () => {
  return (
    <div className="container">
      <h1 className="mainHeading">Our Events</h1>

      {/* Section 1: Image Left, Text Right */}
      <div className="section">
        <div className="image-container">
          <img src={trainingImg} alt="Training Event" />
        </div>
        <div className="content-container">
          <h2>Hands-On Training & Certification Courses</h2>
          <p>
            Experience practical, skill-based learning through our hands-on
            training and certification programs designed to bridge the gap
            between theory and real-world application. Led by industry experts,
            these courses equip learners with in-demand skills, ensuring they
            stay ahead in an evolving landscape. Whether you're a student,
            professional, or enthusiast, our structured modules help you master
            new concepts, validate expertise, and gain a competitive edge.
          </p>
          <button>
            <Link to="/price" className="btn-link">
              View Price
            </Link>
          </button>
        </div>
      </div>

      {/* Section 2: Text Left, Image Right */}
      <div className="section reverse">
        <div className="content-container">
          <h2>Competitions (Academic & Non-Academic)</h2>
          <p>
            Step into the arena of knowledge, creativity, and problem-solving
            with our academic and non-academic competitions. From STEM Olympiads
            and hackathons to business challenges and creative contests, we
            encourage participants to think critically, innovate, and push their
            limits. These events cultivate a spirit of healthy competition while
            fostering teamwork, strategic thinking, and personal growth.
          </p>
          <button>
            <Link to="/price" className="btn-link">
              View Price
            </Link>
          </button>
        </div>
        <div className="image-container">
          <img src={competitionsImg} alt="Competitions Event" />
        </div>
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="section">
        <div className="image-container">
          <img src={trainingImg} alt="Tech Fairs Event" />
        </div>
        <div className="content-container">
          <h2>Themed Events & Tech Fairs</h2>
          <p>
            Explore the latest trends, breakthroughs, and innovations in our
            themed events and tech fairs, where learning meets excitement.
            Engage in interactive exhibits, expert talks, and live
            demonstrations covering everything from emerging technologies to
            sustainability solutions. Whether you're a tech enthusiast,
            researcher, or industry leader, these events offer inspiration,
            networking opportunities, and hands-on experiences in a dynamic
            environment.
          </p>
          <button>
            <Link to="/price" className="btn-link">
              View Price
            </Link>
          </button>
        </div>
      </div>

      {/* Section 4: Text Left, Image Right */}
      <div className="section reverse">
        <div className="content-container">
          <h2>Workshops & Expert-Led Sessions</h2>
          <p>
            Dive deep into specialized learning experiences with our workshops
            and expert-led sessions. These interactive and engaging events are
            tailored for curious minds eager to explore new disciplines, refine
            skills, and gain industry insights. Covering a wide range of
            subjects—from AI and robotics to arts, leadership, and wellness—each
            session is designed to spark innovation and personal growth.
          </p>
          <button>
            <Link to="/price" className="btn-link">
              View Price
            </Link>
          </button>
        </div>
        <div className="image-container">
          <img src={competitionsImg} alt="Workshops Event" />
        </div>
      </div>

      {/* Section 5: Image Left, Text Right */}
      <div className="section">
        <div className="image-container">
          <img src={trainingImg} alt="Tech Fairs Event" />
        </div>
        <div className="content-container">
          <h2>Publishing (Books & Newsletters)</h2>
          <p>
            Publishing (Books & Newsletters) We empower thinkers, researchers,
            and learners by providing platforms for knowledge-sharing through
            publications. Our books & newsletters encapsulate valuable insights,
            emerging trends, and thought leadership across various fields. By
            documenting ideas and discoveries, we contribute to a growing
            community of knowledge-seekers and innovators.
          </p>
          <button>
            <Link to="/price" className="btn-link">
              View Price
            </Link>
          </button>
        </div>
      </div>

      {/* Section 6: Text Left, Image Right */}
      <div className="section reverse">
        <div className="content-container">
          <h2>Summer & Winter Camps</h2>
          <p>
            Our seasonal camps are a blend of learning, adventure, and
            experiential education designed for students and professionals
            alike. Through interactive activities, project-based learning, and
            skill-building exercises, participants develop creativity, teamwork,
            and problem-solving abilities. Whether exploring STEM, leadership,
            entrepreneurship, or the arts, these camps provide a transformative
            experience beyond classrooms.
          </p>
          <button>
            <Link to="/price" className="btn-link">
              View Price
            </Link>
          </button>
        </div>
        <div className="image-container">
          <img src={competitionsImg} alt="Community Engagement Event" />
        </div>
      </div>

      <div className="section">
        <div className="image-container">
          <img src={trainingImg} alt="Tech Fairs Event" />
        </div>
        <div className="content-container">
          <h2>Community Engagement & Networking Initiatives</h2>
          <p>
            At Philomath Networks, we believe in the power of collaboration and
            shared learning. Our community engagement programs and networking
            initiatives connect learners, experts, and professionals through
            meetups, mentorship programs, and knowledge-sharing sessions. These
            platforms foster innovation, encourage meaningful discussions, and
            build long-lasting professional relationships.
          </p>
          <button>
            <Link to="/price" className="btn-link">
              View Price
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
