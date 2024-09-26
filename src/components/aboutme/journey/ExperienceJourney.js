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
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2024 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
  Geeks for Geeks
</h5>
<h6 className="vertical-timeline-element-subtitle mt-2">
  Technical Content Writer | Intern
</h6>
<p>• Successfully published articles on Google's 1st Page, significantly increasing content visibility.</p>
<p>• Applied SEO strategies to enhance article performance, driving increased traffic and engagement.</p>
<p>• Conducted in-depth research on trending technology topics to produce well-informed and accurate content.</p>
<p>• Collaborated with the editorial team to optimize content formatting and align with the brand's tone.</p>
<p>• Continuously monitored SEO analytics to refine content strategies for sustained visibility and reach.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2024 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
  Embedded C
</h5>
<h6 className="vertical-timeline-element-subtitle mt-2">
  Optimizing Embedded Applications | Intern
</h6>
<p>• Developed sophisticated embedded applications on the STM32F446RE microcontroller using Embedded C.</p>
<p>• Configured processors and integrated various hardware components, enhancing system performance.</p>
<p>• Gained practical experience in real-world embedded systems projects, contributing to optimized firmware solutions.</p>
<p>• Worked remotely while collaborating with the team to meet project deadlines and optimize system designs.</p>
<p>• Advanced skills in Embedded C, microcontroller configuration, and hardware-software integration.</p>

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
