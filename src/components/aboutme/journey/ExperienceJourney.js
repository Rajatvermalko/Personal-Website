import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)",paddingLeft:"20px" }}
          date="&nbsp; &nbsp; &nbsp; &nbsp;Aug 2022 - Jan 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Software Developer Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Thrymr Software
          </h6>
          <p>• Frontend Development: Actively contributed to frontend projects, crafting engaging user interfaces with HTML, CSS, and JavaScript.</p>
          <p>• Responsive Design: Ensured seamless user experiences across devices by implementing responsive design principles and leveraging media queries.</p>
          <p>• Frameworks: Utilized React.js and Angular.js to build dynamic and interactive components, enhancing the functionality of web applications.</p>
          <p>• Version Control: Managed codebase changes efficiently with Git, enabling smooth collaboration and version tracking among team members.</p>
          <p>• Bug Fixing: Identified and resolved bugs to maintain product quality, ensuring smooth operation and user satisfaction.</p>
          <p>• Continuous Learning: Demonstrated a commitment to ongoing learning, staying updated with the latest web development trends and technologies.</p>
          <p>• Team Collaboration: Worked closely with cross-functional teams, contributing ideas and solutions to create innovative web solutions.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Feb 2023 - Feb 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Software Developer
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Thrymr Software
          </h6>
          <p>• Full Stack Development: Expertly developed web applications using both MERN and MEAN stacks, demonstrating proficiency in frontend and backend technologies.</p>
          <p>• MERN/MEAN Expertise: Leveraged MongoDB,PostGreSQL for database management, Express.js for backend development, and either React.js or Angular.js for frontend development, along with Node.js for server-side scripting.</p>
          <p>• Agile Methodologies: Worked within Agile development environments, participating in sprint planning, stand-up meetings, and retrospective sessions to ensure timely delivery of high-quality software.</p>
          <p>• API Development: Developed robust APIs to facilitate seamless communication between frontend and backend systems, adhering to RESTful principles for efficient data exchange.</p>
          <p>• Troubleshooting and Optimization: Proactively identified and resolved technical issues, and optimized application performance through code refactoring, caching mechanisms, and database indexing.</p>
          <p>• Collaboration and Communication: Collaborated effectively with multidisciplinary teams, including designers, frontend developers, and QA engineers, and communicated technical concepts clearly to non-technical stakeholders.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)",paddingLeft:"20px" }}
          date="&nbsp; &nbsp; &nbsp; &nbsp;Mar 2024 - Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Senior Software Developer
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Thrymr Software
          </h6>
          <p>• Frontend Development: Actively contributed to frontend projects, crafting engaging user interfaces with HTML, CSS, and JavaScript.</p>
          <p>• Responsive Design: Ensured seamless user experiences across devices by implementing responsive design principles and leveraging media queries.</p>
          <p>• Frameworks: Utilized React.js and Angular.js to build dynamic and interactive components, enhancing the functionality of web applications.</p>
          <p>• Version Control: Managed codebase changes efficiently with Git, enabling smooth collaboration and version tracking among team members.</p>
          <p>• Bug Fixing: Identified and resolved bugs to maintain product quality, ensuring smooth operation and user satisfaction.</p>
          <p>• Continuous Learning: Demonstrated a commitment to ongoing learning, staying updated with the latest web development trends and technologies.</p>
          <p>• Team Collaboration: Worked closely with cross-functional teams, contributing ideas and solutions to create innovative web solutions.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
