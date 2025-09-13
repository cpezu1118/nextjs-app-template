import { comingSoonDict as comingSoonEn } from './en/comingSoon.dictionary';
import { typographyDict as typographyEn } from './en/typography.dictionary';

import { comingSoonDict as comingSoonFr } from './fr/comingSoon.dictionary';

export const dictionaries = {
  en: {
    comingSoon: comingSoonEn,
    typography: typographyEn,
  },
  fr: {
    comingSoon: comingSoonFr,

  },
};

export type SupportedLang = keyof typeof dictionaries; // "en" | "fr"
