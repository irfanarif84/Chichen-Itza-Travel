import { useState } from "react";
import { Users, CloudRain, Thermometer, DollarSign } from "lucide-react";

interface MonthData {
  month: string;
  temp: number;
  rain: number;
  crowds: string;
  price: string;
}

interface MonthlyChartProps {
  data: MonthData[];
  showLegend?: boolean;
}

const crowdConfig: Record<string, { color: string; score: number }> = {
  "Very Low":  { color: "bg-success",     score: 1 },
  "Low":       { color: "bg-success/70",  score: 2 },
  "Medium":    { color: "bg-accent",      score: 3 },
  "High":      { color: "bg-primary",     score: 4 },
  "Very High": { color: "bg-destructive", score: 5 },
};

const priceConfig: Record<string, { label: string }> = {
  "$":    { label: "Budget"   },
  "$$":   { label: "Moderate" },
  "$$$":  { label: "Premium"  },
  "$$$$": { label: "Peak"     },
};

type TabId = "overview" | "temperature" | "rain" | "crowds" | "price";

export default function MonthlyChart({ data, showLegend = true }: MonthlyChartProps) {
  const [activeMonth, setActiveMonth] = useState<MonthData | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const maxTemp = Math.max(...data.map((d) => d.temp));
  const maxRain = Math.max(...data.map((d) => d.rain));

  const getScore = (m: MonthData) => {
    const c = crowdConfig[m.crowds]?.score ?? 3;
    const p = Object.keys(priceConfig).indexOf(m.price) + 1;
    const t = m.temp > 90 ? 3 : m.temp > 85 ? 2 : 1;
    const r = m.rain > 6 ? 3 : m.rain > 3 ? 2 : 1;
    return 12 - (c + p + t + r);
  };

  const bestMonths = [...data]
    .sort((a, b) => getScore(b) - getScore(a))
    .slice(0, 3)
    .map((d) => d.month);

  const tabs: { id: TabId; label: string }[] = [
    { id: "overview",    label: "📊 Overview" },
    { id: "temperature", label: "🌡️ Temp" },
    { id: "rain",        label: "🌧️ Rain" },
    { id: "crowds",      label: "👥 Crowds" },
    { id: "price",       label: "💰 Price" },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h3 className="font-heading font-bold text-lg">Monthly Conditions at Chichen Itza</h3>
        <p className="text-sm text-muted-foreground">Click any month for details. Best months highlighted.</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-border overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[280px]">

        {/* ── Overview ── */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2">
              {data.map((m) => {
                const isBest = bestMonths.includes(m.month);
                const isActive = activeMonth?.month === m.month;
                const crowd = crowdConfig[m.crowds] ?? crowdConfig["Medium"];
                return (
                  <button
                    key={m.month}
                    onClick={() => setActiveMonth(isActive ? null : m)}
                    className={`relative flex flex-col items-center p-2 rounded-lg transition-all border-2 text-center ${
                      isActive
                        ? "border-primary bg-primary/10 scale-105 shadow-md"
                        : isBest
                        ? "border-success bg-success/5 hover:border-primary"
                        : "border-border bg-card hover:border-primary"
                    }`}
                  >
                    {isBest && (
                      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-success rounded-full text-[10px] text-success-foreground flex items-center justify-center font-bold">✓</span>
                    )}
                    <span className="text-xs font-semibold">{m.month}</span>
                    <span className={`w-2.5 h-2.5 rounded-full my-1 ${crowd.color}`} />
                    <span className="text-[11px] text-muted-foreground">{m.temp}°</span>
                    <span className="text-[10px] text-muted-foreground">{m.price}</span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            {activeMonth && (
              <div className="bg-muted/40 rounded-xl p-5 border border-border animate-fade-in-up">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-heading font-bold text-lg">{activeMonth.month} at Chichen Itza</h4>
                  <button onClick={() => setActiveMonth(null)} className="text-muted-foreground hover:text-foreground text-lg">✕</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <Stat icon={<Thermometer className="h-5 w-5 text-primary" />} value={`${activeMonth.temp}°F`} label="Avg High" />
                  <Stat icon={<CloudRain className="h-5 w-5 text-secondary" />} value={`${activeMonth.rain}"`} label="Rainfall" />
                  <Stat icon={<Users className="h-5 w-5 text-accent" />} value={activeMonth.crowds} label="Crowds" />
                  <Stat icon={<DollarSign className="h-5 w-5 text-success" />} value={activeMonth.price} label={priceConfig[activeMonth.price]?.label ?? ""} />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {bestMonths.includes(activeMonth.month) && <span className="text-xs font-semibold bg-success/15 text-success px-2.5 py-1 rounded-full">✓ Recommended</span>}
                  {activeMonth.rain <= 3 && <span className="text-xs font-semibold bg-secondary/15 text-secondary px-2.5 py-1 rounded-full">☀️ Low Rain</span>}
                  {(activeMonth.crowds === "Very Low" || activeMonth.crowds === "Low") && <span className="text-xs font-semibold bg-accent/15 text-accent px-2.5 py-1 rounded-full">👥 Fewer Crowds</span>}
                </div>
              </div>
            )}

            {/* Legend */}
            {showLegend && (
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground pt-2 border-t border-border">
                <span className="font-semibold">LEGEND:</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-success" /> Low Crowds</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-destructive" /> High Crowds</span>
                <span>°F = Temperature</span>
                <span>$ = Price Level</span>
                <span>✓ = Recommended</span>
              </div>
            )}
          </div>
        )}

        {/* ── Temperature ── */}
        {activeTab === "temperature" && (
          <div className="space-y-3">
            {data.map((m) => {
              const pct = (m.temp / maxTemp) * 100;
              const color = m.temp > 90 ? "bg-destructive" : m.temp > 85 ? "bg-accent" : "bg-success";
              const labelColor = m.temp > 90 ? "bg-destructive/10 text-destructive" : m.temp > 85 ? "bg-accent/10 text-accent" : "bg-success/10 text-success";
              const label = m.temp > 90 ? "Hot" : m.temp > 85 ? "Warm" : "Comfortable";
              return (
                <div key={m.month} className="flex items-center gap-3">
                  <span className="w-8 text-xs font-semibold shrink-0">{m.month}</span>
                  <div className="flex-1 h-5 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${color} flex items-center justify-end pr-2`} style={{ width: `${pct}%` }}>
                      <span className="text-[10px] font-bold text-primary-foreground">{m.temp}°F</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${labelColor}`}>{label}</span>
                </div>
              );
            })}
            <div className="flex gap-4 text-xs text-muted-foreground pt-2">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-success" />≤85°F</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-accent" />86-90°F</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-destructive" />91°F+</span>
            </div>
          </div>
        )}

        {/* ── Rainfall ── */}
        {activeTab === "rain" && (
          <div className="space-y-3">
            {data.map((m) => {
              const pct = Math.max((m.rain / maxRain) * 100, 5);
              const shade = m.rain > 6 ? "bg-secondary" : m.rain > 3 ? "bg-secondary/60" : "bg-secondary/30";
              const labelColor = m.rain > 6 ? "bg-secondary/10 text-secondary" : m.rain > 3 ? "bg-accent/10 text-accent" : "bg-success/10 text-success";
              const label = m.rain > 6 ? "Rainy" : m.rain > 3 ? "Moderate" : "Dry";
              return (
                <div key={m.month} className="flex items-center gap-3">
                  <span className="w-8 text-xs font-semibold shrink-0">{m.month}</span>
                  <div className="flex-1 h-5 bg-muted rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${shade} flex items-center justify-end pr-2`} style={{ width: `${pct}%` }}>
                      <span className="text-[10px] font-bold text-foreground">{m.rain}"</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${labelColor}`}>{label}</span>
                </div>
              );
            })}
            <div className="flex gap-4 text-xs text-muted-foreground pt-2">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-secondary/30" />≤3"</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-secondary/60" />4-6"</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-secondary" />7"+</span>
            </div>
          </div>
        )}

        {/* ── Crowds ── */}
        {activeTab === "crowds" && (
          <div className="space-y-4">
            <div className="space-y-3">
              {data.map((m) => {
                const cfg = crowdConfig[m.crowds] ?? crowdConfig["Medium"];
                return (
                  <div key={m.month} className="flex items-center gap-3">
                    <span className="w-8 text-xs font-semibold shrink-0">{m.month}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((lvl) => (
                        <span key={lvl} className={`w-4 h-4 rounded-full ${lvl <= cfg.score ? cfg.color : "bg-muted"}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{m.crowds}</span>
                  </div>
                );
              })}
            </div>
            <div className="bg-muted/40 rounded-lg p-4 text-sm">
              <p className="font-semibold mb-2">💡 Crowd Tips:</p>
              <ul className="space-y-1 text-muted-foreground text-xs">
                <li>• Early morning reduces crowds 50-70%</li>
                <li>• Weekdays have 30-40% fewer tourists</li>
                <li>• Avoid Christmas, Easter, Spring Break</li>
                <li>• Sunrise tours offer the most intimate experience</li>
              </ul>
            </div>
          </div>
        )}

        {/* ── Price ── */}
        {activeTab === "price" && (
          <div className="space-y-4">
            <div className="space-y-3">
              {data.map((m) => {
                const level = Object.keys(priceConfig).indexOf(m.price) + 1;
                return (
                  <div key={m.month} className="flex items-center gap-3">
                    <span className="w-8 text-xs font-semibold shrink-0">{m.month}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((lvl) => (
                        <DollarSign key={lvl} className={`h-4 w-4 ${lvl <= level ? "text-success" : "text-muted"}`} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{m.price} — {priceConfig[m.price]?.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-success/5 border border-success rounded-lg p-3">
                <p className="font-semibold text-success text-xs mb-1">💚 Best Value</p>
                <p className="text-xs text-muted-foreground">May, Jun, Sep, Oct — save 25-35% vs peak</p>
              </div>
              <div className="bg-destructive/5 border border-destructive rounded-lg p-3">
                <p className="font-semibold text-destructive text-xs mb-1">💸 Most Expensive</p>
                <p className="text-xs text-muted-foreground">Dec 20 – Jan 5 and late March (Spring Break)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* Small stat helper */
function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      {icon}
      <span className="font-heading font-bold text-lg">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
