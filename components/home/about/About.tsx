import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Howdy! I&apos;m Rahul Kukadiya, and I&apos;m a Master of Science in Computer Science graduate.
              <br/><br/>
              As a Senior Software Developer with over 5 years of experience, I have developed a strong foundation in both front-end and back-end technologies across diverse industries, including healthcare, banking, and retail. My expertise lies in Java, Spring Boot, JEE, and cloud platforms like Azure and AWS, where I have consistently delivered scalable and efficient solutions. I have also worked with a diverse and collaborative team of developers, testers, product and business analysts, using agile methodologies and Git Bash for version control.
             </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I have had the opportunity to work on critical projects such as EMR system integration and mobile application development, contributing to the healthcare domain. Additionally, my experience at Tata Consultancy Services and eClinicalWorks allowed me to lead teams, mentor junior developers, and collaborate with cross-functional teams to meet high standards in performance and security.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy digital painting. 
              I believe that maintaining a healthy work-life balance is crucial for staying productive and motivated.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
