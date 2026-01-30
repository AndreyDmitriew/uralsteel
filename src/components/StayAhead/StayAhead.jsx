'use client';

import Link from 'next/link';
import styles from './StayAhead.module.scss';

const StayAhead = () => {
  return (
    <section className={styles.stayAhead}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src="/Gemini_Generated_Image_i6hqrmi6hqrmi6hq 1.svg" 
                alt="Cutting-edge manufacturing" 
                className={styles.mainImage}
              />
            </div>
          </div>
          
          <div className={styles.textSection}>
            <div className={styles.scrollableContent}>
              <h2 className={styles.title}>
                Stay Ahead with Cutting-Edge Manufacturing Solutions
              </h2>
              <p className={styles.description}>
                We constantly innovate to provide state-of-the-art steel solutions, 
                optimize production processes, and ensure quality across all stages.
              </p>
              
              <div className={styles.highlights}>
                <h3 className={styles.highlightsTitle}>Highlights:</h3>
                <ul className={styles.highlightsList}>
                  <li>Key Partners & Clients</li>
                  <li>Product & Process Gallery</li>
                  <li>Production Infographics</li>
                </ul>
              </div>
            </div>
            
            <Link href="#contact" className={styles.btnGetInTouch}>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayAhead;