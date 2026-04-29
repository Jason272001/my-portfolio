import React from "react";
import "./Portfolio.scss";

const coreProjects = [
  {
    title: "Windows Server & Active Directory Virtual Lab",
    description:
      "Built a multi-VM lab environment to configure Active Directory users, organizational units, policies, and domain services.",
    skills: "Windows Server, Active Directory, Group Policy, Virtualization",
    status: "Lab Project",
  },
  {
    title: "DHCP and DNS Server Configuration Lab",
    description:
      "Configured DHCP scopes, reservations, and DNS zones to deliver stable name resolution and automated IP assignment.",
    skills: "DNS, DHCP, Windows Server, Network Troubleshooting",
    status: "Lab Project",
  },
  {
    title: "Wireshark Network Traffic Analysis",
    description:
      "Captured and analyzed packets to diagnose connectivity issues and verify protocol behavior across test devices.",
    skills: "Wireshark, TCP/IP, Network Diagnostics",
    status: "In Progress",
  },
  {
    title: "Router and Home Network Configuration",
    description:
      "Configured router settings, subnetting, wireless security, and device segmentation for secure and reliable connectivity.",
    skills: "Router Configuration, TCP/IP, Network Security",
    status: "Lab Project",
  },
  {
    title: "Ethernet Cable Installation and Testing",
    description:
      "Installed and terminated Ethernet cabling and tested cable quality and pinout integrity for office/home deployments.",
    skills: "Cabling, Hardware Installation, Field Technician Skills",
    status: "Lab Project",
  },
  {
    title: "Help Desk Troubleshooting Case Studies",
    description:
      "Documented end-user support scenarios with root-cause analysis and step-by-step resolution workflows.",
    skills: "User Support, Troubleshooting, Documentation",
    status: "In Progress",
  },
];

const additionalProjects = [
  "Web applications built with JavaScript, HTML, and CSS",
  "Python automation and scripting exercises",
  "SQL practice projects for data handling and reporting",
  "Version control workflows with Git and GitHub",
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="progress">
        <h1>IT & Networking Projects</h1>
      </div>

      <div className="projectsGrid">
        {coreProjects.map((project) => (
          <article className="projectCard" key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Skills Used:</strong> {project.skills}
            </p>
            <span>{project.status}</span>
          </article>
        ))}
      </div>

      <div className="additionalSection">
        <h2>Additional Technical Projects</h2>
        <ul>
          {additionalProjects.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
