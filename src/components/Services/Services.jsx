import React from "react";
import "./Services.scss";

const skillGroups = [
  {
    title: "IT Support",
    items: [
      "Hardware/software troubleshooting",
      "Windows, macOS, Linux",
      "Remote support and user support",
      "Workstation setup",
    ],
  },
  {
    title: "Networking",
    items: [
      "TCP/IP, DNS, DHCP",
      "Router configuration",
      "Network troubleshooting",
      "Ethernet cable installation and termination",
      "Network hardware installation",
    ],
  },
  {
    title: "Server & Systems",
    items: [
      "Windows Server",
      "Active Directory and Domain Controllers",
      "Group Policy",
      "DHCP server configuration",
      "DNS server configuration",
    ],
  },
  {
    title: "Tools",
    items: ["VMware", "VirtualBox", "Wireshark", "Git", "GitHub"],
  },
  {
    title: "Programming",
    items: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Electronics & Field Skills",
    items: [
      "Electrical installation",
      "Control panels",
      "Electronic troubleshooting",
      "Cabling",
      "Hardware diagnostics",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem-solving",
      "Communication",
      "Teamwork",
      "Teaching and training users",
    ],
  },
];

const experience = [
  "IT Support Specialist (Freelance) – SRBA",
  "Help Desk Technician (Freelance) – Banh Mi Oven",
  "Networking & Programming Instructor – KMD Myanmar",
  "Electrical & Electronic Technician – Asia Power Quality",
  "Substitute Teacher – Current (communication, leadership, classroom management, patience, and clear explanation of concepts)",
];

const education = [
  "BSc (Hons) Computing – University of Greenwich, First Class",
  "Diploma in Network Communication – Yangon University",
  "Certificate in Mechatronics – SMVTI",
  "CompTIA Network+ Certification",
];

const Services = () => {
  return (
    <div className="service">
      <section className="contentSection" id="About">
        <h2>About Me</h2>
        <p>
          I am based in Los Angeles, CA with a First-Class BSc in Computing and
          hands-on experience in IT support, networking, Windows Server, Active
          Directory, DNS/DHCP, virtualization, router configuration, Ethernet
          cabling, Wireshark, hardware/software troubleshooting, and
          electronics. I hold the CompTIA Network+ certification and am
          seeking IT Support, Network Technician, Field Technician, Help Desk,
          and Computer Support roles.
        </p>
      </section>

      <section className="contentSection" id="Skills">
        <h2>Skills</h2>
        <div className="skillsGrid">
          {skillGroups.map((group) => (
            <article className="skillCard" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contentSection" id="Experience">
        <h2>Experience</h2>
        <ul className="listBlock">
          {experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="contentSection" id="Education">
        <h2>Education & Certifications</h2>
        <ul className="listBlock">
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Services;
