'use client';
/* ----------------------------------------
   LangToggle.tsx
   PURPOSE:
   - Small language switcher that toggles between en and fr.
   - Hides itself when only one language is available.

   USAGE:
   - Place <LangToggle /> anywhere in your layout or page.
---------------------------------------- */

import React from 'react';
import { useDict } from '@/dictionaries/DictContext';
import styles from './LangToggle.module.scss';

export default function LangToggle() {
  const { lang, setLang, availableLangs } = useDict();

  // If only one language is available, render nothing
  if (!availableLangs || availableLangs.length < 2) return null;

  const next = lang === 'en' ? 'fr' : 'en';

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label="Switch language"
      onClick={() => setLang(next)}
    >
      {lang === 'en' ? 'Français' : 'English'}
    </button>
  );
}
