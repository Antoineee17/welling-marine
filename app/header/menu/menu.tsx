'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './menu.module.css';
import { getLocaleFromSearchParams, t, Locale } from '@/app/i18n';
import { Suspense } from 'react';

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

  

  return (
    <nav aria-label="Main Menu" className={styles.siteMenu}>
     
      <ul className={styles.list}>
        {navLeft.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className={styles.item}>
              <Link
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ''}`.trim()}
                aria-current={isActive ? 'page' : undefined}
              >
                {t(locale, item.labelKey)}
              </Link>
            </li>
          );
        })}

        <li className={styles.logoItem}>
          <Link href="/">
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
