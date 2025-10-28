'use client';

import Link from 'next/link';
import styles from './ThemedLink.module.css';

export default function ThemedLink({ href, children, ...props }) {
  return (
    <Link href={href} className={styles.themedLink} {...props}>
      {children}
    </Link>
  );
}