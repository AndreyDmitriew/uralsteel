'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Precision Manufacturing<br/>
              For A Better Future
            </h1>
            
            <p className={styles.heroDescription}>
              To Deliver High-Quality Steel Products With Innovation,
              Reliability And Sustainable Practices.
            </p>
            
            <div className={styles.heroFeatures}>
              <div className={styles.feature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>State-Of-The-Art Production Facilities</span>
              </div>
              <div className={styles.feature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Skilled And Experienced Workforce</span>
              </div>
            </div>
            
            <Link href="#about" className={styles.btnExplore}>
              Explore Our Solutions
            </Link>
          </div>
          
          <div className={styles.heroImage}>
            <Image
    src="/Group 1218.svg"
    alt="Background"
    fill
    priority
    style={{ objectFit: 'cover' }}
  />
          </div>
        </div>
      </div>
      
      <div className={styles.heroDecor}>
        <div className={styles.decorGrid}></div>
      </div>
    </section>
  );
};

export default Hero;
