import React from "react";
import { FaClock, FaBook, FaUsers } from "react-icons/fa"; // Import icons from react-icons
import "./css/Tracks.css";

const Tracks = () => {
  const courses = [
    {
      id: 1,
      category: "UI/UX Design",
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 5,
      duration: "22hr 30min",
      lectures: "34 Courses",
      students: "250 Sales",
      image: `${process.env.PUBLIC_URL}/images/Group 337.png`,
    },
    {
      id: 2,
      category: "UI/UX Design",
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 4,
      duration: "22hr 30min",
      lectures: "34 Courses",
      students: "250 Sales",
      image: `${process.env.PUBLIC_URL}/images/Group 337.png`,
    },
    {
      id: 3,
      category: "UI/UX Design",
      title: "UI/UX Design for Beginners",
      price: "$98",
      rating: 3,
      duration: "22hr 30min",
      lectures: "34 Courses",
      students: "250 Sales",
      image: `${process.env.PUBLIC_URL}/images/Group 337.png`,
    },
  ];

  return (
    <section className="tracks">
      {/* Header Section */}
        <div className="tracks-header">
          <div className="header-decor">
            <img
          src={`${process.env.PUBLIC_URL}/images/casual-life-3d-idea-lamp 1.png`}
          alt="Light Bulb"
          className="arrow-icon-tracks"
            />
          </div>
          <h2>Our Tracks</h2>
          <p>Lorem Ipsum is simply dummy text of the printing.</p>
          <div className="arrow-decor">
            <img
          src={`${process.env.PUBLIC_URL}/images/arrow.png`}
          alt="Arrow Decoration"
          className="arrow-icon-tracks"
            />
          </div>
        </div>

        {/* Course Cards */}
      <div className="course-cards">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              {/* Category */}
              <span className="course-category">{course.category}</span>
              <h3>{course.title}</h3>
              <div className="course-rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={`star ${index < course.rating ? "filled" : ""}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="course-meta">
                <span>
                  <FaClock className="meta-icon" />
                  {course.duration}
                </span>
                <span>
                  <FaBook className="meta-icon" />
                  {course.lectures}
                </span>
                <span>
                  <FaUsers className="meta-icon" />
                  {course.students}
                </span>
              </div>
              <div className="course-footer">
                <span className="course-price">{course.price}</span>
                <button className="join-button">Join Course</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
