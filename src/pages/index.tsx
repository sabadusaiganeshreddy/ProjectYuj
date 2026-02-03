import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function ProfileHeader() {
  return (
    <div className={styles.profileHeader}>
      <div className="container">
        <Heading as="h1" className={styles.profileName}>Sai Ganesh Reddy</Heading>
        <p className={styles.profileTitle}>Engineering at Cisco</p>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <Heading as="h2" className={styles.aboutTitle}>About Me</Heading>
        <div className={styles.aboutContent}>
          <p>
            Hi, I'm Sai Ganesh Reddy, a passionate software engineer and tech enthusiast. 
            I created this blog to share my journey through the fascinating world of computer science.
          </p>
          <p>
            Here, you'll find comprehensive guides on <strong>Data Structures & Algorithms</strong>, 
            insights into <strong>Machine Learning</strong>, discussions on <strong>System Design</strong>, 
            and explorations of cutting-edge <strong>Research Papers</strong>.
          </p>
          <p>
            My goal is to break down complex topics into digestible content, helping fellow developers 
            and learners master these essential concepts. Whether you're preparing for technical interviews 
            or diving deep into competitive programming, you'll find carefully curated resources and 
            problem-solving strategies here.
          </p>
          <p>
            Feel free to explore the blog sections and connect with me through the links in the footer. 
            Let's learn and grow together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Tech blog covering DSA, ML, System Design, and Research Papers">
      <main>
        <ProfileHeader />
        <AboutSection />
      </main>
    </Layout>
  );
}
