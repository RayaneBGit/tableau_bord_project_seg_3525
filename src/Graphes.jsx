import { useState } from "react";
import Graphe3Mois from "./Graphe3mois";
import GrapheAnnuel from "./GrapheAnnuel";
import GrapheMensuel from "./GrapheMensuel";

function Graphes({ donnees }) {
  const [langue, setLangue] = useState("FR");

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 ">Graphiques des prix des aliments</h1>

      <button onClick={() => setLangue(langue === "FR" ? "EN" : "FR")}>
        {langue === "FR" ? "English" : "Français"}
      </button>
      <h2> {langue === "FR"
        ? "Graphe des données alimentaires – Prix aux 3 mois"
        : "Food Price Data – 3-Month Prices"}</h2>
      <Graphe3Mois donnees={donnees} langue={langue} />
      <h2>
        {langue === "FR"
          ? "2. Graphe des données alimentaires – Variation annuelle (%) (Barres horizontales – Juin 2024 à Juin 2025)"
          : "2. Food Price Data – Annual Variation (%) (Horizontal Bar Chart – June 2024 to June 2025)"}
      </h2><GrapheAnnuel donnees={donnees} langue={langue} />
      <h2>
        {langue === "FR"
          ? "3. Graphe des données alimentaires – Variation mensuelle (%) (Barres horizontales – Mai 2025 à Juin 2025)"
          : "3. Food Price Data – Monthly Variation (%) (Horizontal Bar Chart – May 2025 to June 2025)"}
      </h2><GrapheMensuel donnees={donnees} langue={langue} />
    </>
  );
}

export default Graphes;
