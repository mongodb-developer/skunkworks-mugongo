export default function FooterLinks() {
  return (
    <div className="grid">
      <a href={`/`} className="card">
        <h3>Home &rarr;</h3>
        <p>Find all MUG's.</p>
      </a>

      <a href={`/form`} className="card">
        <h3>Insert Data &rarr;</h3>
        <p>Save data into MongoDB.</p>
      </a>

      <a href={`/event`} className="card">
        <h3>Events &rarr;</h3>
        <p>Find all Events.</p>
      </a>

      <a href={`/group`} className="card">
        <h3>Groups &rarr;</h3>
        <p>Find all Groups.</p>
      </a>

      <a href={`/organizer`} className="card">
        <h3>Leaders &rarr;</h3>
        <p>Find all Leaders.</p>
      </a>
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          min-width: 500px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
      `}</style>
    </div>
  );
}
