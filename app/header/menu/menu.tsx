'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './menu.module.css';
import { getLocaleFromSearchParams, t, Locale } from '@/app/i18n';

type NavItem = {
  labelKey: string;
  href: string;
};

const navLeft: NavItem[] = [
  { labelKey: 'navigation.trimarans', href: '/trimarans' },
  { labelKey: 'navigation.innovation', href: '/innovation' },
];

const navRight: NavItem[] = [
  { labelKey: 'navigation.history', href: '/history' },
  { labelKey: 'navigation.contact', href: '/contact' },
];

export default function Menu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = getLocaleFromSearchParams(searchParams);
  
  // État pour gérer l'ouverture du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav aria-label="Main Menu" className={styles.siteMenu}>
      
      {/* HEADER MOBILE (Visible uniquement sur téléphone) */}
      <div className={styles.mobileHeader}>
        <Link href="/" onClick={closeMenu} className={styles.mobileLogo}>
          <Image
            src="/assets/logo_welling_marine.jpg"
            alt={t(locale, 'site.logoAlt')}
            width={80} // Légèrement plus petit pour le mobile
            height={80}
          />
        </Link>
        
        {/* BOUTON BURGER ANIMÉ */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>

      {/* LISTE DE NAVIGATION */}
      <ul className={`${styles.list} ${isMenuOpen ? styles.menuOpen : ''}`}>
        {navLeft.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className={styles.item}>
              <Link
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ''}`.trim()}
                aria-current={isActive ? 'page' : undefined}
                onClick={closeMenu} // Ferme le menu au clic sur mobile
              >
                {t(locale, item.labelKey)}
              </Link>
            </li>
          );
        })}

        {/* LOGO BUREAU (Caché sur mobile) */}
        <li className={styles.logoItem}>
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/assets/logo_welling_marine.jpg"
              alt={t(locale, 'site.logoAlt')}
              width={150}
              height={150}
            />
          </Link>
        </li>

        {navRight.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className={styles.item}>
              <Link
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ''}`.trim()}
                aria-current={isActive ? 'page' : undefined}
                onClick={closeMenu} // Ferme le menu au clic sur mobile
              >
                {t(locale, item.labelKey)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}