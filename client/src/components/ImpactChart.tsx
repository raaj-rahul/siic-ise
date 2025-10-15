import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import type { ImpactResults } from "./DashboardCards";

interface ImpactChartProps {
  results: ImpactResults;
}

export default function ImpactChart({ results }: ImpactChartProps) {
  const data = [
    { name: "People", value: results.peopleScore, color: "hsl(var(--chart-1))" },
    { name: "Planet", value: results.planetScore, color: "hsl(var(--chart-2))" },
    { name: "Profit", value: results.profitScore, color: "hsl(var(--chart-3))" },
  ];

  return (
    <Card className="p-6 backdrop-blur-lg bg-card/80 border-card-border">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">Triple Bottom Line</h3>
        <p className="text-sm text-muted-foreground mt-1">People, Planet, Profit Distribution</p>
      </div>
      
      <div className="h-[300px]" data-testid="chart-impact">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value.toFixed(0)}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "6px",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        {data.map((item) => (
          <div key={item.name} className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">{item.value.toFixed(0)}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
