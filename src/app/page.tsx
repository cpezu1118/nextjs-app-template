/* ----------------------------------------
   page.tsx (root "/")
   PURPOSE:
   - Simple index page while we scaffold.
   - Gives quick links to test routes.
---------------------------------------- */
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <section className="section">
      <div className="container">
        <h1>Scaffolding Starter</h1>
        <p className={styles.lead}>
          Use these links to verify routes while we build features.
        </p>

        <ul className={styles.links}>
          <li><Link href="/coming-soon">Coming Soon</Link></li>
          <li><Link href="/typography">Typography</Link></li>
        </ul>

        <p className={styles.note}>
          You can keep this home page or replace it later with your real landing.
        </p>
      </div>
    </section>
  );
}
