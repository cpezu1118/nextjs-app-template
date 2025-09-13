/* ----------------------------------------
   /typography
   PURPOSE:
   - QA page to preview text styles and rhythm.
   - Helps validate tokens from variables and mixins.
---------------------------------------- */
import styles from './Page.module.scss';

export const metadata = {
  title: 'Typography',
  description: 'Preview of headings, body text, and common inline elements.',
  alternates: { canonical: '/typography' }
};

export default function TypographyPage() {
  return (
    <section className="section">
      <div className="container">
        <h1>Typography System</h1>
        <p className={styles.lead}>
          This page demonstrates our base type scale and spacing. Use it to quickly check visual consistency.
        </p>

        <div className={styles.block}>
          <h1>H1 Example Heading</h1>
          <p>Body paragraph under H1. Check contrast, line-height, and vertical rhythm.</p>
        </div>

        <div className={styles.block}>
          <h2>H2 Example Heading</h2>
          <p>
            This is a paragraph. <strong>Strong text</strong>, <em>emphasis</em>,{' '}
            <a href="#">a link</a>, and <small>small text</small>.
          </p>
          <ul>
            <li>Unordered list item one</li>
            <li>Item two</li>
            <li>Item three</li>
          </ul>
          <ol>
            <li>Ordered item one</li>
            <li>Item two</li>
          </ol>
        </div>

        <div className={styles.block}>
          <p>
            Placeholder image to check alignment and flow:
          </p>
          <img src="https://placehold.co/600x400?text=Typography+Image" alt="Placeholder" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
