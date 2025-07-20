import Accueil from './Accueil';
import Header from './Header';
import Footer from './Footer';
import TableauxPage from './TableauxPage';
import Graphes from './Graphes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';

function App() {

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



        let contenufiltrétableau = contenuSlicetableau.filter((ligne) => {
          return !ligne.includes("Variation en pourcentage");
        })
          .join("\n")
          .replace(/,/g, ".");  // <== remplace les virgules par des points



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
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/graphes_prix_aliments" element={<Graphes donnees={donnees} />} />
          <Route path="/tableau_prix_aliments" element={<TableauxPage donnees={donnees} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
