import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'Pronunciación', value: 70 },
  { name: 'Entonación', value: 20 },
  { name: 'Pausas', value: 10 }
];

const barras = [
  { name: 'Paciente A', progreso: 80 },
  { name: 'Paciente B', progreso: 60 },
];

export default function Charts() {
  const colors = ["#8884d8", "#82ca9d", "#ffc658"];
  return (
    <div>
      <h2>Gráficos de Terapia</h2>
      <BarChart width={300} height={200} data={barras}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="progreso" fill="#8884d8" />
      </BarChart>

      <PieChart width={300} height={250}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}