import { Check, X, Minus } from "lucide-react";

interface ComparisonTableProps {
  title?: string;
  headers: string[];
  rows: Array<{
    label: string;
    values: (string | boolean | null)[];
  }>;
  highlightColumn?: number;
  className?: string;
  recommendedLabel?: string;
}

const ComparisonTable = ({
  title,
  headers,
  rows,
  highlightColumn = 1,
  className = "",
  recommendedLabel = "Recommended",
}: ComparisonTableProps) => {
  const renderCell = (value: string | boolean | null, isHighlight: boolean) => {
    if (value === true) {
      return (
        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${isHighlight ? "bg-success/20 text-success" : "bg-success/10 text-success"}`}>
          <Check className="h-4 w-4" />
        </span>
      );
    }
    if (value === false) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/10 text-destructive">
          <X className="h-4 w-4" />
        </span>
      );
    }
    if (value === null) {
      return (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground">
          <Minus className="h-4 w-4" />
        </span>
      );
    }
    return <span className={isHighlight ? "font-medium text-foreground" : ""}>{value}</span>;
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      {title && (
        <h3 className="font-heading font-semibold text-xl mb-4">{title}</h3>
      )}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 bg-muted/50 border-b border-border font-semibold text-foreground">
              {/* Empty for label column */}
            </th>
            {headers.map((header, i) => (
              <th
                key={i}
                className={`p-4 text-center border-b border-border font-semibold ${
                  i === highlightColumn - 1
                    ? "bg-primary/10 text-primary"
                    : "bg-muted/50 text-foreground"
                }`}
              >
                {header}
                {i === highlightColumn - 1 && (
                  <span className="block text-xs font-normal text-primary/80 mt-0.5">
                    Recommended
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-muted/30 transition-colors">
              <td className="p-4 border-b border-border font-medium text-foreground">
                {row.label}
              </td>
              {row.values.map((value, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-4 text-center border-b border-border ${
                    colIndex === highlightColumn - 1
                      ? "bg-primary/5"
                      : ""
                  }`}
                >
                  {renderCell(value, colIndex === highlightColumn - 1)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
