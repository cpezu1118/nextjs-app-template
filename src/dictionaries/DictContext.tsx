'use client';
/* ----------------------------------------
   DictContext.tsx
   PURPOSE:
   - Provides global dictionary and language state.
   - English is default. French can be enabled or disabled.
   - Exposes availableLangs so the UI can hide the toggle when only one language is active.

   HOW TO HIDE FRENCH:
   - Set ENABLE_FR to false below. The toggle will disappear automatically.
---------------------------------------- */

import React, { createContext, useContext, useMemo, useState } from 'react';
import { dictionaries, SupportedLang } from './index';

/* Feature flag: flip to false if you want to hide French for now */
const ENABLE_FR = true;

type DictProviderProps = {
  children: React.ReactNode;
  defaultLang?: SupportedLang;
};

type DictContextType = {
  lang: SupportedLang;
  dict: typeof dictionaries['en'];         // shape of the current dictionary
  setLang: (lang: SupportedLang) => void;
  availableLangs: SupportedLang[];         // e.g. ['en'] or ['en', 'fr']
};

const DictContext = createContext<DictContextType | undefined>(undefined);

export function DictProvider({ children, defaultLang = 'en' }: DictProviderProps) {
  // Decide which languages are available based on the feature flag
  const availableLangs = useMemo<SupportedLang[]>(
    () => (ENABLE_FR ? (['en', 'fr'] as SupportedLang[]) : (['en'] as SupportedLang[])),
    []
  );

  // Start from defaultLang, but clamp to availableLangs to be safe
  const [lang, setLang] = useState<SupportedLang>(
    availableLangs.includes(defaultLang) ? defaultLang : availableLangs[0]
  );

  // Prevent switching to a disabled language
  const safeSetLang = (next: SupportedLang) => {
    if (!availableLangs.includes(next)) return;
    setLang(next);
  };

  const value: DictContextType = {
    lang,
    setLang: safeSetLang,
    dict: dictionaries[lang],
    availableLangs
  };

  return <DictContext.Provider value={value}>{children}</DictContext.Provider>;
}

export function useDict() {
  const context = useContext(DictContext);
  if (!context) {
    throw new Error('useDict must be used inside a DictProvider');
  }
  return context;
}
