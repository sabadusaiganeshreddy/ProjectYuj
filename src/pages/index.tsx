import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">Software Engineer | Tech Blogger | Problem Solver</p>
        <p className={styles.heroDescription}>
          Exploring Data Structures & Algorithms, Machine Learning, System Design, and Research Papers
        </p>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: 'DSA Patterns',
      description: 'Master Data Structures & Algorithms with pattern-based problem solving approaches',
      link: '/dsa',
      emoji: '🧩',
    },
    {
      title: 'Machine Learning',
      description: 'Deep dives into ML concepts, models, and practical implementations',
      link: '/ml',
      emoji: '🤖',
    },
    {
      title: 'System Design',
      description: 'Learn how to design scalable and reliable distributed systems',
      link: '/system-design',
      emoji: '🏗️',
    },
    {
      title: 'Research Papers',
      description: 'Simplified explanations of cutting-edge research and book recommendations',
      link: '/research',
      emoji: '📚',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <Link to={feature.link} className={styles.featureCard} key={idx}>
              <div className={styles.featureEmoji}>{feature.emoji}</div>
              <Heading as="h3">{feature.title}</Heading>
              <p>{feature.description}</p>
            </Link>
          ))}
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
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
