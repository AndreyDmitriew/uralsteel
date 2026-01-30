'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#introductions', label: 'Introductions' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <a href="tel:89167754582" className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                8(916) 775-45-82
              </a>
              <a href="mailto:UralSteel.gmail.corparate.com" className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                UralSteel.gmail.corparate.com
              </a>
            </div>
            <div className={styles.topBarRight}>
              <div className={styles.language}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                EN
              </div>
              <span className={styles.separator}>|</span>
              <Link href="#" className={styles.helpCenter}>Help Center</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* NEW LOGO IMPLEMENTATION */}
            <Link href="/" className={styles.logo}>
              <img 
                src="/unnamed-removebg-preview123 1.svg" 
                alt="UralSteel Logo" 
                className={styles.logoImage}
              />
              {/* <span className={styles.logoText}>UralSteel</span> */}
            </Link>

            <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
              <ul className={styles.navList}>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className={styles.navLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link href="#contact" className={styles.btnContact}>
              Contact
            </Link>

            <button 
              className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;