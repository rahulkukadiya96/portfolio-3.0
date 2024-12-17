import {SectionHeader} from "@/components/utils/SectionHeader";
import {Project} from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
    return (
        <section className="section-wrapper" id="projects">
            <SectionHeader title="Projects" dir="r"/>

            <div className={styles.projects}>
                {projects.map((project) => {
                    return <Project key={project.title} {...project} />;
                })}
            </div>
        </section>
    );
};

const projects = [
    {
        title: "QL4POMR PICO Wrapper",
        imgSrc: "/project-imgs/agency-listing.png",
        code: "#",
        projectLink: "#",
        tech: ["Scala", "Angular", "NLP", "Sequelize", "BIOBERT", "Neo4J", "Python", "Git", "Github"],
        description: "QL4POMR PICO Wrapper is our translational medicine prototype representing a new vision to transform healthcare through interlinking everything from the bedside along with discoveries and knowledge available at the bench.",
        modalContent: (
            <>
                <p>
                    QL4POMR PICO Wrapper is a prototype search engine designed to retrieve relevant research studies
                    based on patient conditions documented in SOAP notes. It generates comprehensive case reports by
                    extracting articles from various sources, aiding physicians in making evidence-based medical
                    decisions and prescribing treatments.
                </p>
            </>
        ),
    },
    {
        title: "FHIR Dev Portal",
        imgSrc: "/project-imgs/agency-listing.png",
        code: "#",
        projectLink: "#",
        tech: ["Spring Boot", "AngularJS", "Groovy (Test Cases)", "Microsoft Azure (OAuth)", "Spring Security", "Spring Data", "Hibernate", "MySQL"],
        description: "An provider centric application for healthcare EMR vendors to manage their FHIR applications.",
        modalContent: (
            <>
                <p>
                    Designed and developed a portal facilitating external developers and organizations interested in
                    integrating
                    their applications with the eCW EMR. The portal streamlined the registration process for
                    organizations,
                    enabling them to add/update profiles, manage teams, register applications, and conduct application
                    testing
                    in a dedicated environment.
                </p>
                <p>
                    This initiative notably decreased communication time via email and expedited the integration of
                    external
                    applications with minimal human intervention. Additionally, it reduced the integration time from two
                    months to just one week, enabling clients to access FHIR via this portal more efficiently.
                </p>
            </>
        ),
    }, {
        title: "Labhub",
        imgSrc: "/project-imgs/agency-listing.png",
        code: "#",
        projectLink: "#",
        tech: ["Spring Boot", "FTP", "Quartz Framework", "JSP",  "JUnit", "AngularJS", "Groovy (Test Cases)", "Gradle"],
        description: "Labhub serves as a central hub for synchronizing various EMR systems.",
        modalContent: (
            <>
                <p>
                    I work on the ADT and referral interface dashboard, which facilitates sending messages from the EMR
                    to Labhub. From there, Labhub forwards the messages to vendors or the destination EMR.
                </p>
            </>
        ),
    },
    {
        title: "eClinicalWorks V11 EMR",
        imgSrc: "/project-imgs/elancerz.png",
        code: "#",
        projectLink: "#",
        tech: ["Java", "AngularJS", "JSP", "Mockito", " Agile Methodology", "Gradle", "TDD", "MSSQL Server", "MySQL", "Servlet", "Spock Framework", "Jest", "Groovy", "Gradle", "IBM MQ", "Apache Kafka", "Liquibase", "Git", "J2EE"],
        description:
            "An EMR application for healthcare providers to manage patient records and manage clinical workflows in the USA.",
        modalContent: (
            <>
                <p>
                    Contributed to the eClinicalWorks V11 EMR project, specializing in the administration module for
                    efficient
                    management of demographic details pertaining to physicians, referral providers, and staff.
                    Additionally,
                    actively participated in the interface dashboard development, allowing users to install HL7
                    interfaces such
                    as ADT, SIU, DFT, or referral. This facilitated seamless communication with external systems through
                    these interfaces, enhancing interoperability and data exchange capabilities within the EMR system..
                </p>
            </>
        ),
    },
    {
        title: "Shopping With Points",
        imgSrc: "/project-imgs/agency-iron-crm.png",
        code: "#",
        // projectLink: "https://agency-iron-crm.herokuapp.com/",
        projectLink: "#",
        tech: ["Java", "Jersey", "Weblogic Server", "MySQL", "Message Driven Bean", "REST"],
        description:
            "A feature for CIBC Credit card holders to redeem points for cash in the form of cashback.",
        modalContent: (
            <>
                <p>
                    Instrumental in the development of a groundbreaking project focused on point redemption for users
                    who earned points through transactions. As a developer, played a pivotal role in implementing
                    features
                    such as point redemption eligibility checks, actual point redemption processes, and the reversal of
                    point
                    redemption transactions. Notably, this initiative marked the first time in Canada that a bank
                    introduced such
                    features, enhancing user engagement and loyalty
                </p>
            </>
        ),
    },
    {
        title: "OrderHive",
        imgSrc: "/project-imgs/wh_app.png",
        code: "#",
        projectLink:
            "#",
        tech: ["Java", "AngularJS", "Spring Boot", "JUnit"],
        description:
            "Orderhive is product of OpenXcell Technolabs Pvt. Ltd. Orderhive is online tool for Managing Inventory, Order and Shipment. It provides ready-made integration with many popular selling channels like Amazon, eBay, Shopify etc.",
        modalContent: (
            <>
                <p>
                    Orderhive Plus is department for customization of orderhive as per client’s requirements. This
                    customization projects are running on client’s dedicated server. In many customization projects, I
                    have created new features and modified existing features of orderhive code on client’s dedicated
                    server.
                </p>
                <p>
                    I have created automation code as per client’s business requirements. I have also integrated some
                    additional channels on client’s dedicated server.
                </p>
            </>
        ),
    },
];
