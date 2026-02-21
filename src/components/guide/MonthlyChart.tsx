interface MonthData {
  month: string;
  temp: number;
  rain: number;
  crowds: string;
  price: string;
}

interface MonthlyChartProps {
  data: MonthData[];
}

const crowdLevel = (c: string) => {
  switch (c) {
    case "Very Low": return { w: "w-2/12", color: "bg-success" };
    case "Low": return { w: "w-3/12", color: "bg-success" };
    case "Medium": return { w: "w-6/12", color: "bg-accent" };
    case "High": return { w: "w-9/12", color: "bg-primary" };
    case "Very High": return { w: "w-full", color: "bg-destructive" };
    default: return { w: "w-1/2", color: "bg-muted" };
  }
};

export default function MonthlyChart({ data }: MonthlyChartProps) {
  const maxTemp = Math.max(...data.map((d) => d.temp));
  const maxRain = Math.max(...data.map((d) => d.rain));

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-border text-left">
            <th className="py-3 px-3 font-heading font-semibold">Month</th>
            <th className="py-3 px-3 font-heading font-semibold">Temp (°F)</th>
            <th className="py-3 px-3 font-heading font-semibold min-w-[120px]">Rainfall</th>
            <th className="py-3 px-3 font-heading font-semibold min-w-[140px]">Crowds</th>
            <th className="py-3 px-3 font-heading font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            const tempPct = Math.round((d.temp / maxTemp) * 100);
            const rainPct = Math.round((d.rain / maxRain) * 100);
            const crowd = crowdLevel(d.crowds);

            return (
              <tr key={d.month} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="py-3 px-3 font-medium">{d.month}</td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 rounded-full bg-muted flex-1 max-w-[80px]">
                      <div
                        className={`h-3 rounded-full ${d.temp >= 90 ? "bg-destructive" : d.temp >= 85 ? "bg-accent" : "bg-success"}`}
                        style={{ width: `${tempPct}%` }}
                      />
                    </div>
                    <span className="text-muted-foreground whitespace-nowrap">{d.temp}°F</span>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 rounded-full bg-muted flex-1 max-w-[80px]">
                      <div
                        className="h-3 rounded-full bg-secondary"
                        style={{ width: `${rainPct}%` }}
                      />
                    </div>
                    <span className="text-muted-foreground whitespace-nowrap">{d.rain} in</span>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className={`h-2.5 rounded-full ${crowd.color} ${crowd.w}`} />
                    <span className="text-xs text-muted-foreground">{d.crowds}</span>
                  </div>
                </td>
                <td className="py-3 px-3 font-semibold text-primary">{d.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
