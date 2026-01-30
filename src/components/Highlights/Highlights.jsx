'use client';

import Link from 'next/link';
import styles from './Highlights.module.scss';

const Highlights = () => {
  const images = [
    "/9d69ea1b8d6a75fef280eab78da7d032 1.svg",
    "/4df4f68542ce2f65f421ce5247ecb602 1.svg",
    "/60abdd36f4c4d894e9fd0f5f1a5907fc 1.svg"
  ];

  return (
    <section className={styles.highlights}>
      <div className={styles.fullWidthGallery}>
        <div className={styles.sideItem}>
          <img src={images[0]} alt="Factory 1" />
        </div>
        
        <div className={styles.featuredItem}>
          <img src={images[1]} alt="Featured Factory" />
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <h3 className={styles.featuredTitle}>EXPLORE OUR LATEST PROJECTS</h3>
              <p className={styles.featuredDescription}>
                Explore our latest projects and innovations in steel manufacturing. 
                See our processes, products, and achievements in action.
              </p>
              <Link href="#" className={styles.btnCaseStudy}>
                Case Study
                <span className={styles.arrowIcon}>→</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className={styles.sideItem}>
          <img src={images[2]} alt="Factory 2" />
        </div>
      </div>
    </section>
  );
};

export default Highlights;