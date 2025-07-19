import  { useEffect, useState } from "react";
import Papa from "papaparse";

function TableauxPage() {
  const [donnees, setDonnees] = useState([]);

  useEffect(() => {
    fetch("/database_ingredients.csv")
      .then((res) => res.text())
      .then((text) => {
        let lignes = text.split("\n");
        let debutIndex = lignes.findIndex((l) =>
          l.includes("Produits et groupes")
        );
        let finIndex = lignes.findIndex((l) =>
          l.includes("Renvois")
        );

        let indexvariationpourcentage = lignes.findIndex((l) =>
          l.includes("Variation en pourcentage")
        )

        console.log(indexvariationpourcentage + " et " + debutIndex);

        let contenuSlicetableau = lignes.slice(debutIndex, finIndex);

        // Supprime juste "2002=100" de la ligne des titres
        contenuSlicetableau = contenuSlicetableau.map((ligne) =>
          ligne.replace("2002=100", "").trim()
        );
        contenuSlicetableau = contenuSlicetableau.map((ligne) =>
          ligne.replace("(202404=100)", "").trim()
        );
        contenuSlicetableau = contenuSlicetableau.map((ligne) =>
          ligne.replace("(2013=100)", "").trim()
        );
        contenuSlicetableau = contenuSlicetableau.map((ligne) =>
          ligne.replace("(202304=100)", "").trim()
        );

   

        let contenufiltrétableau = contenuSlicetableau.filter((ligne)=>{
          if(!ligne.includes("Variation en pourcentage")){
            return true;
          }

        }).join("\n");
            
       // SI JE VEUX INCLURE LA PREMIER COLONNE VARIATION POURCENTAGE AVANT LES DONNÉES COMME SOUS TITRES DE COLONNES
        /* 
         let condition = false;
         let contenufiltrétableau = contenuSlicetableau.filter((ligne) => {
            if ((ligne.includes("Variation en pourcentage")) && condition == false) {
            condition = true;
            return true
          }
          else if ((ligne.includes("Variation en pourcentage")) && condition == true) {
            return false;
          }
          else {
            return true;
          }}).join("\n");
     
          */


        Papa.parse(contenufiltrétableau, {
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
          <h2>1. Tableau des données alimentaires prix aux mois (juin 2024, mai 2025, juin 2025)</h2>
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
