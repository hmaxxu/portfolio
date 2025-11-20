'use client';

import Link from 'next/link';
import styles from './ThemedLink.module.css';

export default function ThemedLink({ href, color, darkColor, children, ...props }) {
  const style = {
    '--link-color': color,
    '--link-color-dark': darkColor || color,
  };

  return (
    <Link 
      href={href} 
      className={styles.themedLink} 
      style={style} 
      {...props}
    >
      {children}
    </Link>
  );
}
