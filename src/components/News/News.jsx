'use client';

import Link from 'next/link';
import styles from './News.module.scss';

const News = () => {
  const newsItems = [
    {
      date: 'Jan 15, 2026',
      title: 'Steel Plant Wins Safety Award',
      description: 'Our factory received the national safety excellence award for 2026.',
      imageUrl: '/cb615f7255092bba68a4c0cf59909a22 1.svg' 
    },
    {
      date: 'Jan 10, 2026',
      title: 'Launch of New Production Line',
      description: 'Introducing an advanced line for precision steel products.',
      imageUrl: '/efe6f49e7d285849be7030627e2e5e70 1.svg'
    },
    {
      date: 'Jan 05, 2026',
      title: 'Community Outreach Program',
      description: 'Our team participates in local education and environmental initiatives.',
      imageUrl: '/486020a2aa5a57c36298f53a0534e115 1.svg'
    }
  ];

  return (
    <section id="news" className={styles.news}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>NEWS</h2>
        
        <div className={styles.newsGrid}>
          {newsItems.map((item, index) => (
            <article key={index} className={styles.newsCard}>
              <div className={styles.cardImage}>
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title} />
                ) : (
                  <div className={styles.imagePlaceholder}>🖼️</div>
                )}
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                
                <hr className={styles.divider} />
                
                <div className={styles.cardFooter}>
                  <span className={styles.cardDate}>{item.date}</span>
                  <Link href="#" className={styles.cardLink}>
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="#0D1F3C"/>
                      <path d="M14 10L20 16L14 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;