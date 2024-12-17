import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
            <div className={styles.statGrid}>
                <span className="chip">Spring Boot</span>
                <span className="chip">Java</span>
                <span className="chip">J2EE</span>
                <span className="chip">AngularJS</span>
                <span className="chip">Angular</span>
                <span className="chip">Spring OAuth2</span>
                <span className="chip">Spring Data</span>
                <span className="chip">Spring Security</span>
                <span className="chip">Hibernate</span>
                <span className="chip">GraphQL</span>
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">NodeJS</span>
                <span className="chip">Jest</span>
                <span className="chip">Apache Kafka</span>
                <span className="chip">MongoDB</span>
                <span className="chip">MySQL</span>
                <span className="chip">GitHub</span>
                <span className="chip">AWS</span>
                <span className="chip">Microsoft Azure</span>
            </div>
        </div>
      </Reveal>
        <Reveal>
        <div className={styles.statColumn}>
        <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
            <div className={styles.statGrid}>
                <span className="chip">TypeScript</span>
                <span className="chip">Scala</span>
                <span className="chip">Neo4J</span>
                <span className="chip">JBoss</span>
                <span className="chip">VueJS</span>
                <span className="chip">MongoDB</span>
                <span className="chip">SocketCluster</span>
                <span className="chip">Postgres</span>
            </div>
        </div>
        </Reveal>
    </div>
  );
};
