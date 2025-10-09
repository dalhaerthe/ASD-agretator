const { useState, useEffect } = React;

function App() {
  const [links, setLinks] = useState([]);   // dane z JSON
  const [error, setError] = useState(null); // błędy fetch

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('dsource.json'); // bez "/"
        if (!response.ok) throw new Error('Błąd sieci: ' + response.status);
        const data = await response.json();
        setLinks(data.links); // zapisujemy do stanu
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, []); // uruchom raz przy starcie

  if (error) return <p style={{color: "red"}}>❌ {error}</p>;
  if (!links.length) return <p>⏳ Wczytywanie danych...</p>;

  return (
    <div className="container mt-4 p-1">
      <table className="table table-striped table-hover table-responsive-sm">
        <thead className="table-dark">
          <tr>
            <th>lp</th>
            <th>odnośnik</th>
            <th>kto wysłał</th>
            <th>opis i uwagi</th>
          </tr>
        </thead>
        <tbody>
          {links.map(l => (
            <tr key={l.id}>
              <td>{l.id}.</td>
              <td>
                <a href={l.lnk} target="_blank" rel="noopener noreferrer">
                  {l.lnk}
                </a>
              </td>
              <td>{l.who}</td>
              <td>{l.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 🔹 renderowanie poza komponentem
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
