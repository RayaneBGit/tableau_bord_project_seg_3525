import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

function GrapheMensuel({ donnees, langue }) {
  if (!donnees || donnees.length === 0) return <p>Chargement...</p>;

  const data = donnees.map((item) => ({
    produit: item[Object.keys(item)[0]],
    variationMensuelle: parseFloat(item[Object.keys(item)[4]]), // Multiplier par 5
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
          label={{
            value:
              langue === "FR"
                ? "Variation mensuelle (%)"
                : "Monthly Variation (%)",
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
        <Bar dataKey="variationMensuelle">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.variationMensuelle < 0 ? "#ff6c6cff" : "#82ca9d"}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

export default GrapheMensuel;
