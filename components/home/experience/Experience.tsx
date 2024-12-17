import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Mitacs.",
    position: "Research Assistant",
    time: "Jan 2023 - May 2023",
    location: "Thunder Bay, Canada",
    description:
      "Participated in a research project alongside a professor for Thunder Bay Regional Hospital, aimed at developing a platform to generate case reports using the evidence-based medicine approach.",
    tech: [
      "Scala",
      "Angular",
      "Neo4J",
      "Natural Language Processing",
      "Python",
      "Git",
      "Github",
    ],
  },
  {
    title: "eClinicalWorks Pvt Ltd.",
    position: "Senior Software Developer",
    time: "Jan 2020 - August 2022",
    location: "Remote",
    description:
      "As a Java Developer at eClinicalWorks, I played a key role in contributing to one of the leading Electronic Medical Record (EMR) systems in the USA. I actively participated in three distinct modules, collaborating with a team of eight members. Contributed to backend development best practices, including code review processes, documentation standards, and utilizing Git, Bitbucket, and merge conflict resolution for version control and collaboration.",
    tech: ["Java", "Spring Boot", "AngularJS" ,"HL7", "FHIR", "JUnit", "Mockito", "Jest", "Groovy", "Gradle", "TDD", "Liquibase", "Git", "J2EE"],
  },
  {
    title: "TATA Consultancy Services.",
    position: "Software Developer",
    time: "March 2018 - Dec 2019",
    location: "Mumbai, India",
    description:
      "Spearheaded the design, development, and implementation of critical features for the credit card application, ensuring alignment with CIBC’s requirements and standards. Collaborated closely with cross-functional teams to gather and analyze business requirements, translating them into scalable and efficient Java code.Took on a temporary leadership position to steer a recently assembled team, offering guidance and assistance to both junior and senior members without a Java background.",
    tech: ["Java", "J2EE", "JSF", "JSP", "Servlet", "Message Driven Bean", "Apache Ant", "IBM ClearCase", "Weblogic Server", "JBoss", "PEGA", "Eclipse" ,"EJB", "Oracle", "TSys Database", "Banking"],
  },
  {
    title: "OpenXcell Technolabs.",
    position: "Software Developer",
    time: "April 2017 - Feb 2018",
    location: "Ahmedabad, India",
    description:
      "Collaborated with the Team Lead and a 5-member customization team to design and develop OrderHive, a comprehensive order management tool. Worked diligently to develop and enhance the application, actively contributing to its design and functionality to meet the specific requirements outlined by our client",
    tech: ["VueJS", "Java", "NodeJs", "GraphQL", "Vuetify", "MySQL", "Websockets",  "Spring Boot", "SocketCluster", "GitLab"],
  },
  // {
  //   title: "IFormat Logic",
  //   position: "Fullstack Developer",
  //   time: "Aug 2020 - Dec 2020",
  //   location: "Palanginan, Zambales",
  //   description:
  //     "Managed and created complex projects from start to finish and also collaborated with other developers. Translated requirements into polished, high-level web application.",
  //   tech: ["Vuejs", "Laravel", "Tailwind", "Git", "Github"],
  // },
];
