

function TableauxPage({donnees}) {


  return (
    <div>
      <section>
      <h1>|Tableau des données générales pour tout le monde|</h1>
      <table border="1" cellPadding="2">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Juin 2024</th>
            <th>Mai 2025</th>
            <th>Juin 2025</th>
            <th>Mai 2025 à Juin 2025 (Variation en pourcentage mensuelle)</th>
            <th>Juin 2024 à Juin 2025 (Variation en pourcentage annuelle)</th>
          </tr>
        </thead>
        <tbody>
          {donnees.map((item, index) => (
            <tr key={index}>
              <td>{item[Object.keys(item)[0]]}</td>
              <td>{item[Object.keys(item)[1]]}</td>
              <td>{item[Object.keys(item)[2]]}</td>
              <td>{item[Object.keys(item)[3]]}</td>
              <td>{item[Object.keys(item)[4]]}</td>
              <td>{item[Object.keys(item)[5]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
      <section>
          <h2>1. Tableau des données alimentaires prix aux 3 mois (juin 2024, mai 2025, juin 2025)</h2>
      <table border="1" cellPadding="2">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Juin 2024</th>
            <th>Mai 2025</th>
            <th>Juin 2025</th>
          </tr>
        </thead>
        <tbody>
          {donnees.map((item, index) => (
            <tr key={index}>
              <td>{item[Object.keys(item)[0]]}</td>
              <td>{item[Object.keys(item)[1]]}</td>
              <td>{item[Object.keys(item)[2]]}</td>
              <td>{item[Object.keys(item)[3]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
       <section>
      <h2>2. Tableau des données alimentaires prix en variation annuelle pourcentage (Juin 2024 à Juin 2025)</h2>
      <table border="1" cellPadding="2">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Juin 2024 à Juin 2025 (Variation en pourcentage annuelle)</th>
          </tr>
        </thead>
        <tbody>
          {donnees.map((item, index) => (
            <tr key={index}>
              <td>{item[Object.keys(item)[0]]}</td>
              <td>{item[Object.keys(item)[5]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
      <section>
      <h2>3. Tableau des données alimentaires prix en variation mensuelle pourcentage (Mai 2025 à Juin 2025)</h2>
      <table border="1" cellPadding="2">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Mai 2025 à Juin 2025 (Variation en pourcentage mensuelle)</th>
          </tr>
        </thead>
        <tbody>
          {donnees.map((item, index) => (
            <tr key={index}>
              <td>{item[Object.keys(item)[0]]}</td>
              <td>{item[Object.keys(item)[4]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
    </div>
  );
}

export default TableauxPage;
