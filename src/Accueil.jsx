import React, { useEffect, useState } from "react";
import Papa from "papaparse";

function Accueil() {
  const [donnees, setDonnees] = useState([]);

  useEffect(() => {
    fetch("/database_ingredients.csv")
      .then((res) => res.text())
      .then((text) => {
        const lignes = text.split("\n");
        const startIndex = lignes.findIndex((l) =>
          l.includes("Produits et groupes")
        );

        const contenuSansEntete = lignes.slice(startIndex).join("\n");

        Papa.parse(contenuSansEntete, {
          delimiter: ";",
          header: true,
          skipEmptyLines: true,
          complete: (res) => {
            console.log("Données parsées :", res.data);
            setDonnees(res.data);
          },
        });
      });
  }, []);

  return (
    <div>
      <h2>Tableau des données</h2>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Juin 2024</th>
            <th>Mai 2025</th>
            <th>Juin 2025</th>
            <th>Mai 2025 à Juin 2025</th> {/* 🔥 Ajoutée */}
            <th>Juin 2024 à Juin 2025</th> {/* 🔥 Ajoutée */}
          </tr>
        </thead>
        <tbody>
          {donnees.map((item, index) => (
            <tr key={index}>
              <td>{item[Object.keys(item)[0]]}</td>
              <td>{item[Object.keys(item)[1]]}</td>
              <td>{item[Object.keys(item)[2]]}</td>
              <td>{item[Object.keys(item)[3]]}</td>
              <td>{item[Object.keys(item)[4]]}</td> {/* 🔥 Mai -> Juin */}
              <td>{item[Object.keys(item)[5]]}</td> {/* 🔥 Juin -> Juin */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Accueil;
