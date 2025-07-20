import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Graphe3Mois({ donnees, langue }) {
  if (!donnees || donnees.length === 0) {
    return <p>Chargement des données...</p>;
  }

  const data = donnees.map((item) => ({
    produit: item[Object.keys(item)[0]],
    juin2024: parseFloat(item[Object.keys(item)[1]]),
    mai2025: parseFloat(item[Object.keys(item)[2]]),
    juin2025: parseFloat(item[Object.keys(item)[3]]),
  }));

  return (
    <ResponsiveContainer width="200%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="1" />
        <XAxis
          dataKey="produit"
          angle={-45}
          textAnchor="end"
          interval={0}
          tick={{ fontSize: 5 }}
          height={130}
          label={{
            value: "Produits alimentaires",
            position: "insideBottom",
            offset: 10,
            style: { textAnchor: "middle", fontSize: 12 },
            value: langue === "FR"
              ? "Produits alimentaires"
              : "Food Products",
            position: "insideBottom",
            offset: 10
          }}
        />

        <YAxis
          label={{
            value:
              langue === "FR"
                ? "Prix ($CAD)"
                : "Price ($CAD)",
            angle: -90,
            position: "insideLeft",
            style: { textAnchor: "middle", fontSize: 12 },
          }}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="juin2024" stroke="#8884d8" />
        <Line type="monotone" dataKey="mai2025" stroke="#82ca9d" />
        <Line type="monotone" dataKey="juin2025" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>

  );
}
