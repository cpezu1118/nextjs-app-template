/* ----------------------------------------
   not-found.tsx
   PURPOSE:
   - Custom 404 page for unknown routes.
---------------------------------------- */
export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Page not found</h1>
        <p>Please check the URL or return to the home page.</p>
      </div>
    </section>
  );
}