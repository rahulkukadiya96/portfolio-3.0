import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/avatar.webp";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m Rahul<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a <span>Full-Stack Java Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              I&apos;ve over 5 years of experience building and scaling applications across diverse domains,
              including healthcare, finance and retail, working with organizations ranging from startups to some of the largest companies in the world.
              Let&apos;s connect!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Rahul Kukadiya | Full-Stack Java Developer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
