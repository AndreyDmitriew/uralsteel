'use client';

import Link from 'next/link';
import styles from './About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutHeader}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>About Us</h2>
            <p className={styles.sectionDescription}>
              We produce high-quality steel products with a focus on innovation, safety, and 
              sustainability. Our advanced manufacturing processes ensure precision and reliability, 
              while our dedicated team works tirelessly to meet the evolving needs of the industry. 
              We strive to provide solutions that drive efficiency, minimize environmental impact, 
              and support long-term growth for our clients.
            </p>
          </div>
          <Link href="#about" className={styles.btnViewMore}>
            View More About Us
          </Link>
        </div>

        <div className={styles.aboutGrid}>
          {/* Our Mission */}
          <div className={styles.aboutCard}>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardDescription}>
              Deliver precision steel solutions with innovation and sustainability.
            </p>
            <ul className={styles.cardList}>
              <li>Innovation-driven design</li>
              <li>Eco-friendly production</li>
            </ul>
          </div>

          {/* Our Expertise - Central Card with Shadow */}
          <div className={`${styles.aboutCard} ${styles.featuredCard}`}>
            <h3 className={styles.cardTitle}>Our Expertise</h3>
            <p className={styles.cardDescription}>
              Decades of experience in high-quality steel manufacturing.
            </p>
            <ul className={styles.cardList}>
              <li>Skilled workforce</li>
              <li>Advanced machinery</li>
            </ul>
          </div>

          {/* Our Commitment */}
          <div className={styles.aboutCard}>
            <h3 className={styles.cardTitle}>Our Commitment</h3>
            <p className={styles.cardDescription}>
              Ensuring safety, reliability and efficiency for every product we make.
            </p>
            <ul className={styles.cardList}>
              <li>Consistent quality</li>
              <li>Customer satisfaction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;