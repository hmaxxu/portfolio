'use client';

import Link from 'next/link';
import styles from './ThemedLink.module.css';

// 1. Add 'color' to the destructured props
export default function ThemedLink({ href, color, children, ...props }) {
  return (
    <Link 
      href={href} 
      className={styles.themedLink} 
      // 2. Inject the CSS variable here using the style attribute
      style={{ '--link-color': color }} 
      {...props}
    >
      {children}
    </Link>
  );
};