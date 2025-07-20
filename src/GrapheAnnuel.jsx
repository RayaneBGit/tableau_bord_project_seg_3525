import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from "recharts";

export default function GrapheAnnuel({ donnees, langue }) {
  if (!donnees || donnees.length === 0) return <p>Chargement...</p>;

  const data = donnees.map((item) => ({
    produit: item[Object.keys(item)[0]],
    variationAnnuelle: parseFloat(item[Object.keys(item)[5]]), 
  }));



  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <BarChart
        layout="vertical" // Barres horizontales
        width={800}
        height={data.length * 30} // Ajuste la hauteur selon le nombre de produits
        data={data}
        barSize={15}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          domain={[0, 31]}
          label={{
            value:
              langue === "FR"
                ? "Variation annuelle (%)"
                : "Annual Variation (%)",
            position: "insideBottomRight",
            offset: -1,
          }}
        />

        <YAxis
          dataKey="produit"
          type="category"
          tick={{ fontSize: 10 }}
          width={300}
          label={{
            value:
              langue === "FR"
                ? "Produits alimentaires"
                : "Food Products",
            angle: -90,
            position: "insideLeft",
            offset: 40,
          }}
        />
        <Tooltip />
        <Bar dataKey="variationAnnuelle">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.variationAnnuelle < 0 ? "#FF4C4C" : "#82ca9d"}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
