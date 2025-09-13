'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Button from '@/components/common/Button/Button';
import { useDict } from '@/dictionaries/DictContext';
import styles from './ComingSoon.module.scss';

export default function ComingSoon() {
  const { dict } = useDict();
  const t = dict.comingSoon; // shorthand for this page's section

  // Countdown
  const target = useMemo(() => new Date('2025-12-31T23:59:59Z').getTime(), []);
  const [remaining, setRemaining] = useState<number>(target - Date.now());

  useEffect(() => {
    const id = setInterval(() => setRemaining(target - Date.now()), 1000);
    return () => clearInterval(id);
  }, [target]);

  const parts = useMemo(() => {
    const ms = Math.max(remaining, 0);
    const sec = Math.floor(ms / 1000) % 60;
    const min = Math.floor(ms / 1000 / 60) % 60;
    const hr = Math.floor(ms / 1000 / 60 / 60) % 24;
    const day = Math.floor(ms / 1000 / 60 / 60 / 24);
    return { day, hr, min, sec };
  }, [remaining]);

  // Form
  const [email, setEmail] = useState('');
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(t.form.successMessage);
    setEmail('');
  }

  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.flex}>
          <div className={styles.text}>
            <h1>{t.heading}</h1>
            <p className={styles.lead}>{t.lead}</p>

            <div className={styles.countdown} aria-label="Countdown to launch">
              <div className={styles.cell}>
                <span className={styles.num}>{parts.day}</span>
                <span className={styles.label}>{t.countdownLabels.days}</span>
              </div>
              <div className={styles.cell}>
                <span className={styles.num}>{parts.hr}</span>
                <span className={styles.label}>{t.countdownLabels.hours}</span>
              </div>
              <div className={styles.cell}>
                <span className={styles.num}>{parts.min}</span>
                <span className={styles.label}>{t.countdownLabels.minutes}</span>
              </div>
              <div className={styles.cell}>
                <span className={styles.num}>{parts.sec}</span>
                <span className={styles.label}>{t.countdownLabels.seconds}</span>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="email">
                {t.form.placeholder}
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder={t.form.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <Button type="submit">{t.form.buttonText}</Button>
            </form>
          </div>

          <div className={styles.image}>
            <img
              src="https://placehold.co/600x400?text=Coming+Soon"
              alt={t.imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
